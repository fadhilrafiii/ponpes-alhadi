import connectDB from 'db';
import News from 'db/models/News';

import { errorHandlerMiddleware } from 'middlewares/error-handler';

import joi, { joiErrorHandler } from 'shared/utils/joi';
import response from 'shared/utils/response';
import { getVideoYoutubeThumbnailImage, isYoutubeUrl } from 'shared/utils/string';

const newsQuerySchema = joi
  .object()
  .keys({
    limit: joi.number().min(1).default(10),
    isTitleOnly: joi.boolean().default(false),
  })
  .error(([error]) => joiErrorHandler(error));

const newsSchema = joi
  .object()
  .keys({
    title: joi.string().required().label('Judul Berita'),
    banner: joi.string().required().label('URL Banner Berita'),
    content: joi.string().required().label('Isi Berita'),
  })
  .error(([error]) => joiErrorHandler(error));

const handler = async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'POST')
    return response(res, {
      status: 405,
      message: 'Method harus "GET" atau "POST"!',
    });

  await connectDB();

  if (req.method === 'POST') {
    const existingNewsWithTitle = await News.findOne({ title: req.body.title });

    if (existingNewsWithTitle)
      return response(res, {
        status: 400,
        message: 'Berita dengan judul tersebut sudah ada!',
      });

    const validatedPayload = await newsSchema.validateAsync(req.body);
    const news = await News.create(validatedPayload);

    return response(res, {
      status: 200,
      message: 'Berhasil membuat berita baru!',
      data: news.toObject(),
    });
  } else {
    const validatedQuery = await newsQuerySchema.validateAsync(req.query);

    let news = [];
    const { isTitleOnly, limit } = validatedQuery;
    if (isTitleOnly) {
      news = await News.find().select('title -_id').sort('-updatedAt').limit(limit);
    } else {
      news = await News.find().select('banner title').sort('-updatedAt').limit(limit);
      news = news.map((n) =>
        isYoutubeUrl(n.banner)
          ? {
              ...n.toObject(),
              banner: getVideoYoutubeThumbnailImage(n.banner),
            }
          : n,
      );
    }

    return response(res, {
      status: 200,
      message: 'Berhasil mengambil data berita!',
      data: news,
    });
  }
};

export default errorHandlerMiddleware(handler);
