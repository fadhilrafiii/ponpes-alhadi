import { getAuthenticateAPI } from 'client/auth';

const withAuth = (gssp) => {
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
