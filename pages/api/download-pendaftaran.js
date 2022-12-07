import { utils, write } from 'xlsx';

import connectDB from 'db';
import Pendaftaran from 'db/models/Pendaftaran';

import { errorHandlerMiddleware } from 'middlewares/error-handler';

import dayjs from 'shared/utils/datetime';
import { mapPendaftarData } from 'shared/utils/object';
import response from 'shared/utils/response';

const handler = async (req, res) => {
  const { method } = req;
  if (method !== 'GET')
    return response(res, {
      message: 'Method harus "GET"!',
      status: 405,
    });

  await connectDB();

  const pendaftar = await Pendaftaran.find({});
  const pendaftarData = pendaftar.map((d) => mapPendaftarData(d));

  const book = utils.book_new();
  const sheet = utils.json_to_sheet(pendaftarData);

  utils.book_append_sheet(book, sheet, 'Pendaftar');

  res.setHeader(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  );
  res.setHeader(
    'Content-Disposition',
    'attachment; filename=' + `Pendaftar Ponpes Al Hadi-${dayjs().format('DD-MM-YYYY')}.xlsx`,
  );

  const data = write(book, { type: 'buffer', bookType: 'xlsx' });
  res.end(data);
};

export default errorHandlerMiddleware(handler);
