import Santri from 'db/models/Santri';
import Teacher from 'db/models/Teacher';
import { verify } from 'jsonwebtoken';
import response from 'utils/response';

export const authenticate = (fn, type) => async (req, res) => {
  const BearerToken = req.headers.authorization;
  if (!BearerToken)
    return response(res, {
      message: 'Anda belum masuk sebagai santri atau guru! Silakan login terlebih dahulu.',
      status: 401,
    });

  const userType = req.headers['ponpes-alhadi-user-type'];
  const [Bearer, Token] = BearerToken.split(' ');

  if (Bearer !== 'Bearer' || !userType || !Token) {
    return response(res, {
      message: 'Anda belum masuk sebagai santri atau guru! Silakan login terlebih dahulu.',
      status: 401,
    });
  }

  if (type && userType !== type)
    return response(res, { message: type + ' tidak diizinkan mengakses data ini!', status: 403 });

  verify(Token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
    if (!err && decoded) {
      if (userType === 'Santri') {
        const santri = await Santri.findOne({ _id: decoded._id });
        if (!santri)
          return response(res, {
            message: 'Santri tidak ditemukan! Silakan login kembali.',
            status: 401,
          });
      } else if (userType === 'Teacher') {
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

      return fn(req, res);
    }

    return response(res, {
      message: 'Anda melakukan login yang tidak benar! Silakan login kembali',
      status: 401,
    });
  });
};
