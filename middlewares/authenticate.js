import { verify } from 'jsonwebtoken';
import response from 'utils/response';

import connectDB from 'db';
import Santri from 'db/models/Santri';
import Teacher from 'db/models/Teacher';

export const authenticate = (fn) => async (req, res) => {
  await connectDB();
  const BearerToken = req.cookies['auth-token'];
  if (!BearerToken)
    return response(res, {
      message: 'Anda belum masuk sebagai santri atau guru! Silakan login terlebih dahulu.',
      status: 401,
    });

  const [Bearer, Token] = BearerToken.split(' ');

  if (Bearer !== 'Bearer' || !Token) {
    return response(res, {
      message: 'Anda belum masuk sebagai santri atau guru! Silakan login terlebih dahulu.',
      status: 401,
    });
  }

  return verify(Token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
    if (!err && decoded) {
      if (decoded.type === 'Santri') {
        const santri = await Santri.findOne({ _id: decoded._id });
        if (!santri)
          return response(res, {
            message: 'Santri tidak ditemukan! Silakan login kembali.',
            status: 401,
          });
      } else if (decoded.type === 'Teacher') {
        const teacher = await Teacher.findOne({ _id: decoded._id });
        if (!teacher)
          return response(res, {
            message: 'Guru tidak ditemukan! Silakan login kembali.',
            status: 401,
          });
      } else
        return response(res, {
          message: 'Tipe pengguna tidak ditemukan! Silakan login kembali.',
          status: 401,
        });

      req.user = decoded;
      return fn(req, res);
    }

    return response(res, {
      message: 'Anda melakukan login yang tidak benar! Silakan login kembali',
      status: 401,
    });
  });
};
