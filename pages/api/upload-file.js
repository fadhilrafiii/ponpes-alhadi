import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

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

  const dirPath = path.join(process.cwd(), 'public/data/sertifikat');
  const isDirExists = fs.existsSync(dirPath);

  if (!isDirExists) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const fullPath = `${dirPath}/${file.originalFilename}`;
  fs.writeFileSync(fullPath, data);
  await fs.unlinkSync(file.filepath);
  return fullPath;
};

export default post;
