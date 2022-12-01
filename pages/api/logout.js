import cookie from 'cookie';

import { errorHandlerMiddleware } from 'middlewares/error-handler';

import response from 'shared/utils/response';

const handler = async (req, res) => {
  const { method } = req;
  if (method !== 'POST') return response(res, { status: 405, message: 'Method harus "POST"!' });

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('auth-token', '', {
      httpOnly: false,
      secure: process.env.NODE_ENV !== 'production' ? false : true,
      sameSite: 'strict',
      maxAge: -1,
      path: '/',
    }),
  );
  return response(res, {
    status: 302,
    message: 'Logout berhasil!',
  });
};

export default errorHandlerMiddleware(handler);
