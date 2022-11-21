import { compareSync } from 'bcrypt';
import connectDB from 'db';
import Santri from 'db/models/Santri';
import Joi from 'joi';
import jwt from 'jsonwebtoken';
import { errorHandlerMiddleware } from 'middlewares/error-handler';
import joi from 'utils/joi';
import response from 'utils/response';

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

  const { _id, name, fullName } = santri;
  const token = jwt.sign({ _id, nisn, name, fullName }, process.env.JWT_SECRET_KEY);

  return response(res, {
    status: 200,
    message: 'Login Santri berhasil!',
    data: { _id, name, nisn, fullName, token },
  });
};

export default errorHandlerMiddleware(handler);
