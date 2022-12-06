import { monthOptions } from 'constants/general';

import Visitor from 'db/models/Visitor';

import { errorHandlerMiddleware } from 'middlewares/error-handler';

import dayjs from 'shared/utils/datetime';
import joi, { joiErrorHandler } from 'shared/utils/joi';
import response from 'shared/utils/response';

const getVisitorSchema = joi
  .object()
  .keys({
    month: joi.number().optional(),
    year: joi.number().required(),
  })
  .error(([error]) => joiErrorHandler(error));

const postVisitorSchema = joi.object().keys({
  ip: joi.string().required(),
});

const handler = async (req, res) => {
  const { method, query, body } = req;
  if (method !== 'POST' && method !== 'GET')
    return response(res, { status: 405, message: 'Method harus "POST" atau "GET"!' });

  if (method === 'GET') {
    const { month, year } = await getVisitorSchema.validateAsync(query);
    let startDate;
    let endDate;
    let filterDate = dayjs().year(year);
    if (month || month === 0) {
      filterDate = filterDate.month(month);
      startDate = filterDate.startOf('month');
      endDate = filterDate.endOf('month');
    } else {
      startDate = filterDate.startOf('year');
      endDate = filterDate.endOf('year');
    }

    const visitors = await Visitor.find({
      createdAt: {
        $gte: startDate,
        $lt: endDate,
      },
    });

    let data = {};
    if (month || month === 0) {
      Array(endDate.date())
        .fill(0)
        .forEach((day, idx) => {
          data[idx] = { time: (idx + 1).toString(), total: 0 };
        });

      visitors.forEach(({ createdAt }) => {
        const date = dayjs(createdAt).date();
        data[date - 1].total++;
      });
    } else {
      const months = monthOptions.slice(1);
      months.forEach((day, idx) => {
        data[idx] = { time: months[idx].label, total: 0 };
      });

      visitors.forEach(({ createdAt }) => {
        data[dayjs(createdAt).month()].total++;
      });
    }

    return response(res, {
      status: 200,
      message: 'Berhasil mengambil data pengunjung!',
      data: Object.values(data),
    });
  } else {
    console.log(body);
    const payload = await postVisitorSchema.validateAsync(body);
    const startOfToday = dayjs().startOf('day');
    const endOfToday = dayjs().endOf('day');
    const visitorWithSameIPToday = await Visitor.findOne({
      ip: payload.ip,
      createdAt: {
        $gte: startOfToday,
        $lt: endOfToday,
      },
    });

    if (visitorWithSameIPToday)
      return response(res, {
        status: 204,
        message: 'Pengunjung sudah datang hari ini!',
      });

    await Visitor.create(payload);
    return response(res, {
      status: 200,
      message: 'Berhasil mendata pengunjung!',
    });
  }
};

export default errorHandlerMiddleware(handler);
