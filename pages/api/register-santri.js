import bcrypt from 'bcrypt';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import Joi from 'shared/utils/joi';
import response from 'shared/utils/response';

import connectDB from 'db';
import Santri from 'db/models/Santri';

import { errorHandlerMiddleware } from 'middlewares/error-handler';

const registerSchema = Joi.object().keys({
  name: Joi.string().required(),
  fullName: Joi.string().required(),
  nisn: Joi.string().required(),
  phone: Joi.string().optional().pattern(new RegExp('^0[7|8][0-9]{8,11}$')),
  birthDate: Joi.date().raw().format('YYYY-MM-DD'),
  birthPlace: Joi.string().required(),
  entryYear: Joi.number().required(),
  class: Joi.string().hex().length(24),
  email: Joi.string().email().optional(),
  password: Joi.string().alphanum().required(),
});

const handler = async (req, res) => {
  const { method } = req;
  if (method !== 'POST')
    return response(res, { status: 405, message: 'Metode request harus "POST"!' });

  const validatedPayload = await registerSchema.validateAsync(req.body);

  await connectDB();

  const { nisn } = validatedPayload;
  const existingSantri = await Santri.findOne({ nisn });
  if (existingSantri)
    return response(res, { status: 400, message: `Santri dengan NISN ${nisn} sudah ada!` });

  // Hash Password
  const hashedPassword = await bcrypt.hashSync(validatedPayload.password, 10);
  validatedPayload.password = hashedPassword;

  const santri = await Santri.create(validatedPayload);
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
    message: 'Pendaftaran Santri berhasil!',
    data: santri,
  });
};

export default errorHandlerMiddleware(handler);
