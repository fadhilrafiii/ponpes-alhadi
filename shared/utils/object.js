export const cleanObject = (obj) => {
  const newObj = { ...obj };

  Object.keys(obj).forEach((key) => {
    if (!newObj[key] && newObj[key] !== 0) delete newObj[key];
  });

  return newObj;
};

export const mapPendaftarData = (data) => {
  const mappedData = {
    Nama: data.calonPesertaDidik.name,
    Gender: data.calonPesertaDidik.gender,
    NISN: data.calonPesertaDidik.nisn,
    NIS: data.calonPesertaDidik.nis,
    'No Ijazah': data.calonPesertaDidik.ijazahNumber,
    NIK: data.calonPesertaDidik.nik,
    'Tempat Lahir': data.calonPesertaDidik.birthPlace,
    'Tanggal Lahir': data.calonPesertaDidik.birthDate,
    'Kebutuhan Khusus': data.calonPesertaDidik.specialNeeds,
    'Alamat Tempat Tinggal': data.calonPesertaDidik.address,
    Provinsi: data.calonPesertaDidik.province,
    Kecamatan: data.calonPesertaDidik.district,
    'Kabupaten/Kota': data.calonPesertaDidik.city,
    Kelurahan: data.calonPesertaDidik.subdistrict,
    'Jenis Tinggal': data.calonPesertaDidik.addressType,
    'Nomor Telepon Tempat Tinggal': data.calonPesertaDidik.addressPhone,
    'Nomor Handphone': data.calonPesertaDidik.phone,
    'Nama Asal Sekolah': data.schoolOrigin.name,
    'Kota Asal Sekolah': data.schoolOrigin.city,
    'Alamat Asal Sekolah': data.schoolOrigin.address,
    'Hafalan Al-Quran': data.calonPesertaDidikScore.score,
    'Tipe Prestasi 1': data.prestasi[0]?.tipe || '',
    'Level Prestasi 1': data.prestasi[0]?.level || '',
    'Predikat Prestasi 1': data.prestasi[0]?.predicate || '',
    'Kegiatan Prestasi 1': data.prestasi[0]?.activity || '',
    'Berkas Prestasi 1': data.prestasi[0]?.file?.url || '',
    'Tipe Prestasi 2': data.prestasi[1]?.tipe || '',
    'Level Prestasi 2': data.prestasi[1]?.level || '',
    'Predikat Prestasi 2': data.prestasi[1]?.predicate || '',
    'Kegiatan Prestasi 2': data.prestasi[1]?.activity || '',
    'Berkas Prestasi 2': data.prestasi[1]?.file?.url || '',
    'Tipe Prestasi 3': data.prestasi[2]?.tipe || '',
    'Level Prestasi 3': data.prestasi[2]?.level || '',
    'Predikat Prestasi 3': data.prestasi[2]?.predicate || '',
    'Kegiatan Prestasi 3': data.prestasi[2]?.activity || '',
    'Berkas Prestasi 3': data.prestasi[2]?.file?.url || '',
    'Nama Ayah': data.father.name,
    'Ayah masih hidup?': data.father.isAlive,
    'Kebutuhan Khusus Ayah': data.father.specialNeeds,
    'Tempat Lahir Ayah': data.father.birthPlace,
    'Tanggal Lahir Ayah': data.father.birthDate,
    'Alamat Tempat Tinggal Ayah': data.father.address,
    'Pendidikan Terakhir Ayah': data.father.lastStudy,
    'Pekerjaan Ayah': data.father.job,
    'Pendapatan Ayah': data.father.income,
    'Nomor Telepon Tempat Tinggal Ayah': data.father.addressPhone,
    'Nomor Handphone Ayah': data.father.phone,
    'Nama Ibu': data.father.name,
    'Ibu masih hidup?': data.mother.isAlive,
    'Kebutuhan Khusus Ibu': data.mother.specialNeeds,
    'Tempat Lahir Ibu': data.mother.birthPlace,
    'Tanggal Lahir Ibu': data.mother.birthDate,
    'Alamat Tempat Tinggal Ibu': data.mother.address,
    'Pendidikan Terakhir Ibu': data.mother.lastStudy,
    'Pekerjaan Ibu': data.mother.job,
    'Pendapatan Ibu': data.mother.income,
    'Nomor Telepon Tempat Tinggal Ibu': data.mother.addressPhone,
    'Nomor Handphone Ibu': data.mother.phone,
    'Nama Wali': data.father.name,
    'Kebutuhan Khusus Wali': data.father.specialNeeds,
    'Tempat Lahir Wali': data.father.birthPlace,
    'Tanggal Lahir Wali': data.father.birthDate,
    'Alamat Tempat Tinggal Wali': data.father.address,
    'Pendidikan Terakhir Wali': data.father.lastStudy,
    'Nomor Telepon Tempat Tinggal Wali': data.father.addressPhone,
    'Nomor Handphone Wali': data.father.phone,
  };

  return mappedData;
};
