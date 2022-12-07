import connectDB from 'db';
import Video from 'db/models/Video';

import { errorHandlerMiddleware } from 'middlewares/error-handler';

import joi from 'shared/utils/joi';
import response from 'shared/utils/response';
import { getVideoYoutubeEmbedUrl, getVideoYoutubeThumbnailImage } from 'shared/utils/string';

const getVideoSchema = joi.object().keys({
  isAdmin: joi.boolean().default(false),
});

const updateVideoSchema = joi.object().keys({
  video1: {
    url: joi.string().allow(''),
    title: joi.string().allow(''),
  },
  video2: {
    url: joi.string().allow(''),
    title: joi.string().allow(''),
  },
  video3: {
    url: joi.string().allow(''),
    title: joi.string().allow(''),
  },
  video4: {
    url: joi.string().allow(''),
    title: joi.string().allow(''),
  },
  video5: {
    url: joi.string().allow(''),
    title: joi.string().allow(''),
  },
});

const handler = async (req, res) => {
  const { method, body } = req;
  if (method !== 'PUT' && method !== 'GET')
    return response(res, {
      message: 'Method harus "PUT"!',
      status: 405,
    });

  await connectDB();
  if (method === 'PUT') {
    const validatedBody = await updateVideoSchema.validateAsync(body);

    const result = await Video.findOneAndUpdate(
      { _id: '507f1f77bcf86cd799439011' },
      validatedBody,
      { upsert: true, new: true },
    );

    if (!result._id) {
      return response(res, {
        message: 'Gagal memperbarui video!',
        status: 400,
      });
    }

    return response(res, {
      message: 'Berhasil memperbarui video!',
      status: 200,
    });
  } else {
    const validateQuery = await getVideoSchema.validateAsync(req.query);

    const video = await Video.findOne({ _id: '507f1f77bcf86cd799439011' });
    let videoData = video.toObject();
    delete videoData._id;
    delete videoData.__v;
    delete videoData.updatedAt;

    if (!validateQuery.isAdmin) {
      Object.keys(videoData).forEach((k) => {
        const data = {
          title: videoData[k].title,
          url: getVideoYoutubeEmbedUrl(videoData[k].url),
          thumbnail: getVideoYoutubeThumbnailImage(videoData[k].url),
        };

        videoData[k] = data;
      });
    }

    return response(res, {
      message: 'Berhasil mengambil video!',
      status: 200,
      data: videoData,
    });
  }
};

export default errorHandlerMiddleware(handler);
