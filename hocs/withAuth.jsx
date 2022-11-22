import { getAuthenticateAPI } from 'client/auth';
import { redirectServerTo } from 'utils/redirect';

const withAuth = (gssp) => {
  return async (ctx) => {
    const component = await gssp(ctx);

    const cookie = ctx.req?.headers.cookie;
    if (!cookie) {
      redirectServerTo(ctx, '/login');
      return component;
    }
    const { status, data: user } = await getAuthenticateAPI({ headers: { cookie } });

    if (status === 401) {
      redirectServerTo(ctx, '/login');
      return component;
    }

    return { props: { ...component.props, user } };
  };
};

export default withAuth;
