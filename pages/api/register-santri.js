import bcrypt from 'bcrypt';
import connectDB from 'db';
import Santri from 'db/models/Santri';
import jwt from 'jsonwebtoken';
import { errorHandlerMiddleware } from 'middlewares/error-handler';
import Joi from 'utils/joi';
import response from 'utils/response';

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

  const { _id, name, fullName } = await Santri.create(validatedPayload);
  const token = jwt.sign({ _id, nisn, name, fullName }, process.env.JWT_SECRET_KEY);

  return response(res, {
    status: 200,
    message: 'Pendaftaran Santri berhasil!',
    data: { _id, name, nisn, fullName, token },
  });
};

export default errorHandlerMiddleware(handler);
