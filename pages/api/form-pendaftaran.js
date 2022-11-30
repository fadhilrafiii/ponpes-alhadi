import connectDB from 'db';
import Pendaftaran from 'db/models/Pendaftaran';

import { errorHandlerMiddleware } from 'middlewares/error-handler';

import joi, { joiErrorHandler } from 'shared/utils/joi';
import response from 'shared/utils/response';

const pendaftaranSchema = joi
  .object()
  .keys({
    calonPesertaDidik: joi.object().keys({
      name: joi.string().required().label('Nama Calon Peserta Didik'),
      gender: joi.string().required().label('Gender Calon Peserta Didik'),
      nisn: joi.string().required().label('NISN Calon Peserta Didik'),
      nis: joi.string().required().label('NIS Calon Peserta Didik'),
      ijazahNumber: joi.string().required().label('No Ijazah Calon Peserta Didik'),
      nik: joi.string().required().label('NIK Calon Peserta Didik'),
      birthPlace: joi.string().required().label('Tempat Lahir Calon Peserta Didik'),
      birthDate: joi
        .date()
        .format('YYYY-MM-DD')
        .raw()
        .required()
        .label('Tanggal Lahir Calon Peserta Didik'),
      specialNeeds: joi.string().required().label('Kebutuhan Khusus Calon Peserta Didik'),
      address: joi.string().required().label('Alamat Tempat Tinggal Calon Peserta Didik'),
      province: joi.string().required().label('Provinsi Calon Peserta Didik'),
      district: joi.string().required().label('Kecamatan Calon Peserta Didik'),
      city: joi.string().required().label('Kabupaten/Kota Calon Peserta Didik'),
      subdistrict: joi.string().required().label('Kelurahan Calon Peserta Didik'),
      addressType: joi.string().required().label('Jenis Tinggal Calon Peserta Didik'),
      addressPhone: joi
        .string()
        .allow('', null)
        .label('Nomor Telepon Tempat Tinggal Calon Peserta Didik'),
      phone: joi.string().required().label('Nomor Handphone Calon Peserta Didik'),
      email: joi
        .string()
        .email()
        .optional()
        .allow('', null)
        .label('Email Pribadi Calon Peserta Didik'),
    }),
    schoolOrigin: joi.object().keys({
      name: joi.string().required().label('Nama Sekolah Asal'),
      city: joi.string().required().label('Kabupaten/Kota Sekolah Asal'),
      address: joi.string().required().label('Alamat Sekolah Asal'),
    }),
    calonPesertaDidikScore: joi.object().keys({
      score: joi.string().required().label('Hafalan Al-Quran yang dimiliki'),
    }),
    prestasi: joi
      .array()
      .items(
        joi.object().keys({
          tipe: joi.string().required().label('Jenis Prestasi'),
          level: joi.string().required().label('Tingkat Prestasi'),
          predicate: joi.string().required().label('Predikat Prestasi'),
          activity: joi.string().required().label('Nama Kegiatan Prestasi'),
          file: joi.any().required().label('Lampiran Piagam/Sertifikat Prestasi'),
        }),
      )
      .required(),
    father: joi
      .object()
      .keys({
        name: joi.string().required().label('Nama Ayah'),
        isAlive: joi.string().required().label('Apakah Ayah masih hidup'),
        specialNeeds: joi.string().required().label('Kebutuhan Khusus Ayah'),
        birthPlace: joi.string().required().label('Tempat Lahir Ayah'),
        birthDate: joi.date().format('YYYY-MM-DD').raw().required().label('Tanggal Lahir Ayah'),
        address: joi.string().required().label('Alamat Tempat Tinggal Ayah'),
        lastStudy: joi.string().required().label('Pendidikan Terakhir Ayah'),
        job: joi.string().required().label('Pekerjaan Ayah'),
        income: joi.string().required().label('Pendapatan Ayah'),
        addressPhone: joi.string().allow('', null).label('Nomor Telepon Tempat Tinggal Ayah'),
        phone: joi.string().required().label('Homor Handphone Ayah'),
      })
      .required(),
    mother: joi
      .object()
      .keys({
        name: joi.string().required().label('Nama Ibu'),
        isAlive: joi.string().required().label('Apakah Ibu masih hidup'),
        specialNeeds: joi.string().required().label('Kebutuhan Khusus Ibu'),
        birthPlace: joi.string().required().label('Tempat Lahir Ibu'),
        birthDate: joi.date().format('YYYY-MM-DD').raw().required().label('Tanggal Lahir Ibu'),
        address: joi.string().required().label('Alamat Tempat Tinggal Ibu'),
        lastStudy: joi.string().required().label('Pendidikan Terakhir Ibu'),
        job: joi.string().required().label('Pekerjaan Ibu'),
        income: joi.string().required().label('Pendapatan Ibu'),
        addressPhone: joi.string().allow('', null).label('Nomor Telepon Tempat Tinggal Ibu'),
        phone: joi.string().required().label('Nomor Handphone Ibu'),
      })
      .required(),
    wali: joi
      .object()
      .keys({
        name: joi.string().allow('', null).optional().label('Nama Wali'),
        specialNeeds: joi.string().allow('', null).optional().label('Kebutuhan Khusus Wali'),
        birthPlace: joi.string().allow('', null).optional().label('Tempat Lahir Wali'),
        birthDate: joi
          .date()
          .allow('', null)
          .format('YYYY-MM-DD')
          .raw()
          .optional()
          .label('Tanggal Lahir Wali'),
        address: joi.string().allow('', null).optional().label('Alamat Tempat Tinggal Wali'),
        lastStudy: joi.string().allow('', null).optional().label('Pendidikan Terakhir Wali'),
        addressPhone: joi
          .string()
          .allow('', null)
          .allow('', null)
          .label('Nomor Telepon Tempat Tinggal Wali'),
        phone: joi.string().allow('', null).optional().label('Nomor Handphone Wali'),
      })
      .optional(),
  })
  .error(([error]) => joiErrorHandler(error));

const handler = async (req, res) => {
  const { method } = req;
  if (method !== 'POST')
    return response(res, { status: 405, message: 'Metode request harus "POST"!' });

  const validatedPayload = await pendaftaranSchema.validateAsync(req.body, { abortEarly: true });
  await connectDB();

  const entry = await Pendaftaran.create(validatedPayload);

  return response(res, {
    status: 200,
    message: 'Pendaftaran berhasil',
    data: {
      id: entry._id,
    },
  });
};

export default errorHandlerMiddleware(handler);
