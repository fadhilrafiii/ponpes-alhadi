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
  form.parse(req, async (err, fields, files) => {
    const url = await saveFile(files.file);
    return response(res, {
      message: 'Berhasil mengunggah berkas!',
      status: 201,
      data: url,
    });
  });
};

const saveFile = async (file) => {
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(`public/data/sertifikat/${file.originalFilename}`, data);
  await fs.unlinkSync(file.filepath);
  return `/public/data/sertifikat/${file.originalFilename}`;
};

export default post;
