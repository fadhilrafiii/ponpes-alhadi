import aws from 'aws-sdk';
import formidable from 'formidable';
import fs from 'fs';

import dayjs from 'shared/utils/datetime';
import response from 'shared/utils/response';

export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req, res) => {
  const form = new formidable.IncomingForm();
  return form.parse(req, async (err, fields, files) => {
    const fileStream = new fs.createReadStream(files.file.filepath);

    const endpoint = new aws.Endpoint(process.env.AWS_S3_ENDPOINT);
    const s3 = new aws.S3({
      endpoint,
      region: process.env.AWS_S3_REGION,
      credentials: {
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_ACCESS_KEY_ID,
      },
    });

    const params = {
      ContentType: files.file.mimetype,
      Bucket: 'ponpes-alhadi',
      Key: `${files.file.originalFilename}-${dayjs().format('YYYY-MM-DD HH:mm:ss')}`,
      Body: fileStream,
    };

    return s3.upload(params, (err, data) => {
      console.log(err);
      if (err) return response(res, { message: 'Gagal mengunggah berkas!', status: 400 });
      else {
        return response(res, {
          message: 'Berhasil mengunggah berkas!',
          status: 200,
          data: data.Location,
        });
      }
    });
  });
};

export default post;
