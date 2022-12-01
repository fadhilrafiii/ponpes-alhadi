import aws from 'aws-sdk';
import formidable from 'formidable';
import fs from 'fs';

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

    const endpoint = new aws.Endpoint('l5q7.fra.idrivee2-26.com');
    const s3 = new aws.S3({
      endpoint,
      region: 'de-fra',
      credentials: {
        accessKeyId: 'X8mKbPXr7SXenHfIeQBN',
        secretAccessKey: '2Tog1WVu3sxMxxECVoGRXGIrLSou4rSim86UgHCP',
      },
    });

    const params = {
      ContentType: files.file.mimetype,
      Bucket: 'ponpes-alhadi',
      Key: files.file.originalFilename,
      Body: fileStream,
    };

    return s3.upload(params, (err, data) => {
      if (err) return response(res, { message: 'Gagal mengunggah berkas!', status: 400 });
      else {
        console.log(data);
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
