import { compareSync } from 'bcrypt';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';

import connectDB from 'db';
import Santri from 'db/models/Santri';

import { errorHandlerMiddleware } from 'middlewares/error-handler';

import joi from 'shared/utils/joi';
import response from 'shared/utils/response';

const loginSchema = joi
  .object()
  .keys({
    nisn: joi.string(),
    email: joi.string(),
    password: joi.string().required().messages({
      'string.empty': 'Password tidak boleh kosong!',
    }),
  })
  .xor('email', 'nisn')
  .messages({
    'string.empty': 'NISN/Email tidak boleh kosong!',
  });

const handler = async (req, res) => {
  const { method } = req;
  if (method !== 'POST') return response(res, { status: 405, message: 'Method harus "POST"!' });

  const { nisn, email, password } = await loginSchema.validateAsync(req.body, { abortEarly: true });

  await connectDB();

  const santri = await Santri.findOne({ $or: [{ email }, { nisn }] });
  if (!santri) return response(res, { status: 404, message: 'Akun santri tidak ditemukan' });

  const isPasswordValid = compareSync(password, santri.password);
  if (!isPasswordValid)
    return response(res, {
      status: 400,
      message: 'Password salah, Coba lagi!',
    });

  const santriObject = { ...santri.toObject(), type: 'Santri' };
  delete santriObject.password;
  const token = jwt.sign(santriObject, process.env.JWT_SECRET_KEY);

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('auth-token', 'Bearer ' + token, {
      httpOnly: false,
      secure: process.env.NODE_ENV !== 'production' ? false : true,
      sameSite: 'strict',
      maxAge: 3600,
      path: '/',
    }),
  );
  return response(res, {
    status: 200,
    message: 'Login Santri berhasil!',
    data: santriObject,
  });
};

export default errorHandlerMiddleware(handler);
