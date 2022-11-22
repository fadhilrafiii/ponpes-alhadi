import cookie from 'cookie';
import response from 'utils/response';

import { errorHandlerMiddleware } from 'middlewares/error-handler';

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
    status: 200,
    message: 'Logout Santri berhasil!',
  });
};

export default errorHandlerMiddleware(handler);
