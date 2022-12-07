import { getAuthenticateAPI } from 'client/auth';

import { getRedirectToBasedOnProfile } from 'shared/utils/auth';

const withAuth = (profileType, gssp) => {
  return async (ctx) => {
    const component = await gssp(ctx);
    const sourceUrl = ctx.req?.url;

    const cookie = ctx.req?.headers.cookie;
    if (!cookie) {
      return {
        props: component.props,
        redirect: {
          destination: `/login${sourceUrl ? `?from=${sourceUrl}` : ''}`,
        },
      };
    }

    const { status, data: user } = await getAuthenticateAPI({ headers: { cookie } });
    if (user && profileType && profileType !== user?.type) {
      return {
        props: component.props,
        redirect: {
          destination: getRedirectToBasedOnProfile(user?.type),
        },
      };
    }

    if (status === 401) {
      ctx.res?.setHeader(
        'Set-Cookie',
        'auth-token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
      );

      return {
        props: component.props,
        redirect: {
          destination: `/login${sourceUrl ? `?from=${sourceUrl}` : ''}`,
        },
      };
    }

    return { props: { ...component.props, user } };
  };
};

export default withAuth;
