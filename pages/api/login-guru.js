import { compareSync } from 'bcrypt';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';

import connectDB from 'db';
import Teacher from 'db/models/Teacher';

import { errorHandlerMiddleware } from 'middlewares/error-handler';

import joi from 'shared/utils/joi';
import response from 'shared/utils/response';

const loginSchema = joi
  .object()
  .keys({
    nip: joi.string(),
    email: joi.string(),
    password: joi.string().required().messages({
      'string.empty': 'Password tidak boleh kosong!',
    }),
  })
  .xor('email', 'nip')
  .messages({
    'string.empty': 'NIP/Email tidak boleh kosong!',
  });

const handler = async (req, res) => {
  const { method } = req;
  if (method !== 'POST') return response(res, { status: 405, message: 'Method harus "POST"!' });

  const { nip, email, password } = await loginSchema.validateAsync(req.body, { abortEarly: true });

  await connectDB();

  const teacher = await Teacher.findOne({ $or: [{ email }, { nip }] });
  if (!teacher) return response(res, { status: 404, message: 'Akun santri tidak ditemukan' });

  const isPasswordValid = compareSync(password, teacher.password);
  if (!isPasswordValid)
    return response(res, {
      status: 400,
      message: 'Password salah, Coba lagi!',
    });

  const teacherObject = { ...teacher.toObject(), type: 'Guru' };
  delete teacherObject.password;
  const token = jwt.sign(teacherObject, process.env.JWT_SECRET_KEY);

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('auth-token', 'Bearer ' + token, {
      httpOnly: false,
      secure: process.env.NODE_ENV !== 'production' ? false : true,
      sameSite: 'strict',
      maxAge: 3600 * 24,
      path: '/',
    }),
  );
  return response(res, {
    status: 200,
    message: 'Login Guru berhasil!',
    data: teacherObject,
  });
};

export default errorHandlerMiddleware(handler);
