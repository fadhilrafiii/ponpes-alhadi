import { compareSync } from 'bcrypt';
import cookie from 'cookie';
import Joi from 'joi';
import jwt from 'jsonwebtoken';
import joi from 'utils/joi';
import response from 'utils/response';

import connectDB from 'db';
import Santri from 'db/models/Santri';

import { errorHandlerMiddleware } from 'middlewares/error-handler';

const loginSchema = joi
  .object()
  .keys({
    nisn: Joi.string(),
    email: Joi.string(),
    password: Joi.string().required(),
  })
  .xor('email', 'nisn');

const handler = async (req, res) => {
  const { method } = req;
  if (method !== 'POST') return response(res, { status: 405, message: 'Method harus "POST"!' });

  const { nisn, email, password } = await loginSchema.validateAsync(req.body);

  await connectDB();

  const santri = await Santri.findOne({ $or: [{ email }, { nisn }] });
  if (!santri) return response(res, { status: 404, message: 'Akun santri tidak ditemukan' });

  const isPasswordValid = compareSync(password, santri.password);
  if (!isPasswordValid)
    return response(res, {
      status: 400,
      message: 'Password salah, Coba diingat kembali atau lebih teliti dalam memasukkan password!',
    });

  delete santri.password;
  const token = jwt.sign({ ...santri.toObject(), type: 'Santri' }, process.env.JWT_SECRET_KEY);

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('auth-token', 'Bearer ' + token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'production' ? false : true,
      sameSite: 'strict',
      maxAge: 3600 * 24,
      path: '/',
    }),
  );
  return response(res, {
    status: 200,
    message: 'Login Santri berhasil!',
  });
};

export default errorHandlerMiddleware(handler);
