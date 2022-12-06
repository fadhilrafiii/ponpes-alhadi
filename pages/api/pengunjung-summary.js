import Visitor from 'db/models/Visitor';

import { authenticate } from 'middlewares/authenticate';
import { errorHandlerMiddleware } from 'middlewares/error-handler';

import dayjs from 'shared/utils/datetime';
import response from 'shared/utils/response';

const handler = async (req, res) => {
  if (req.method !== 'GET') {
    return response(res, {
      message: 'Method harus "GET"!',
      status: 405,
    });
  }

  const allTime = await Visitor.count({});
  const currentYear = dayjs();
  const byYear = await Visitor.count({
    createdAt: {
      $gte: currentYear.startOf('year'),
      $lt: currentYear.endOf('year'),
    },
  });
  const byMonth = await Visitor.count({
    createdAt: {
      $gte: currentYear.startOf('month'),
      $lt: currentYear.endOf('month'),
    },
  });

  const data = {
    byMonth,
    byYear,
    allTime,
  };

  return response(res, {
    message: 'Berhasil mengambil data ringkasan pengunjung!',
    status: 200,
    data,
  });
};

export default errorHandlerMiddleware(authenticate(handler));
