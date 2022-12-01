import bcrypt from 'bcrypt';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';

import connectDB from 'db';
import Teacher from 'db/models/Teacher';

import { errorHandlerMiddleware } from 'middlewares/error-handler';

import Joi, { joiErrorHandler } from 'shared/utils/joi';
import response from 'shared/utils/response';

const registerSchema = Joi.object()
  .keys({
    name: Joi.string().required(),
    fullName: Joi.string().required(),
    gender: Joi.string().required(),
    nip: Joi.string().required(),
    phone: Joi.string().optional().allow(null, '').pattern(new RegExp('^0[7|8][0-9]{8,11}$')),
    entryYear: Joi.number().required(),
    email: Joi.string().email().optional(),
    password: Joi.string().alphanum().required(),
    birthDate: Joi.date().raw().format('YYYY-MM-DD'),
    birthPlace: Joi.string().required(),
    lessons: Joi.array().items(Joi.string().hex().length(24)),
  })
  .error(([error]) => joiErrorHandler(error));

const handler = async (req, res) => {
  const { method } = req;
  if (method !== 'POST')
    return response(res, { status: 405, message: 'Metode request harus "POST"!' });

  const validatedPayload = await registerSchema.validateAsync(req.body);

  await connectDB();

  const { nisn } = validatedPayload;
  const existingGuru = await Teacher.findOne({ nisn });
  if (existingGuru)
    return response(res, { status: 400, message: `Guru dengan NISN ${nisn} sudah ada!` });

  // Hash Password
  const hashedPassword = await bcrypt.hashSync(validatedPayload.password, 10);
  validatedPayload.password = hashedPassword;

  const guru = await Teacher.create(validatedPayload);
  const guruObject = { ...guru.toObject(), type: 'Guru' };
  delete guruObject.password;
  const token = jwt.sign(guruObject, process.env.JWT_SECRET_KEY);

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

  delete guru.password;
  return response(res, {
    status: 200,
    message: 'Pendaftaran Guru berhasil!',
    data: guruObject,
  });
};

export default errorHandlerMiddleware(handler);
