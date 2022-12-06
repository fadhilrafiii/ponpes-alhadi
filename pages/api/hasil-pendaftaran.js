import Pendaftaran from 'db/models/Pendaftaran';

import { authenticate } from 'middlewares/authenticate';
import { errorHandlerMiddleware } from 'middlewares/error-handler';

import joi from 'shared/utils/joi';
import response from 'shared/utils/response';

const schema = joi.object().keys({
  showAll: joi.boolean().required(),
});

const handler = async (req, res) => {
  if (req.method !== 'GET') {
    return response(res, {
      message: 'Method harus "GET"!',
      status: 405,
    });
  }

  const validateQuery = await schema.validateAsync(req.query);

  const listPendaftaran = await Pendaftaran.find({})
    .select(
      'calonPesertaDidik.name calonPesertaDidik.gender calonPesertaDidik.nisn calonPesertaDidik.nis',
    )
    .sort('createdAt');

  const dataPendaftaran = listPendaftaran.map((d) => d.calonPesertaDidik);
  const data = {
    listPendaftaran: validateQuery.showAll ? dataPendaftaran : dataPendaftaran.slice(0, 3),
    totalData: dataPendaftaran.length,
  };

  return response(res, {
    message: 'Berhasil mengambil data pendaftaran santri!',
    status: 200,
    data,
  });
};

export default errorHandlerMiddleware(authenticate(handler));
