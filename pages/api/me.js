import response from 'shared/utils/response';

import { authenticate } from 'middlewares/authenticate';

const handler = (req, res) => {
  if (req.method !== 'GET')
    return response(res, {
      status: 405,
      message: `Tidak menerima HTTP method ${req.method}`,
    });

  return response(res, {
    status: 200,
    message: 'Berhasil mengautentikasi pengguna!',
    data: req.user,
  });
};

export default authenticate(handler);
