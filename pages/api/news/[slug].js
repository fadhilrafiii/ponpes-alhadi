import News from 'db/models/News';

import { errorHandlerMiddleware } from 'middlewares/error-handler';

import response from 'shared/utils/response';

const handler = async (req, res) => {
  const { query, method } = req;
  if (method !== 'GET') return response(res, { status: 405, message: 'Method harus "GET"!' });

  const news = await News.findOne({ title: query.slug });

  return response(res, {
    status: 200,
    message: 'Berhasil mengambil detail berita!',
    data: news,
  });
};

export default errorHandlerMiddleware(handler);
