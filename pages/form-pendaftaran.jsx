import Head from 'next/head';
import { useState } from 'react';

import {
  FormAsalSekolah,
  FormNilaiPesertaDidik,
  FormPesertaDidik,
} from 'components/FormPendaftaran';
import FormPrestasiPesertaDidik from 'components/FormPendaftaran/FormPrestasiPesertaDidik';

import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/FormPenerimaan.module.scss';

const FormPenerimaan = () => {
  const [form, setForm] = useState({
    calonPesertaDidik: {
      name: '',
      gender: null,
      nisn: '',
      nis: '',
      ijazahNumber: 'DN-',
      nik: '',
      birthPlace: '',
      birthDate: null,
      specialNeeds: '',
      address: '',
      province: '',
      district: '',
      city: '',
      subdistrict: '',
      addressType: null,
      addressPhone: '',
      phone: '',
      email: '',
    },
    schoolOrigin: {
      name: '',
      city: '',
      address: '',
    },
    calonPesertaDidikScore: {
      score: null,
    },
    prestasi: [],
  });

  const handleSubmit = () => console.log(form);

  const handleSelectChange = (name, value) => {
    const [section, key] = name.split('-');
    setForm((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [key]: value,
      },
    }));
  };

  const handleInputTextChange = (event) => {
    let { name, value } = event.target;
    const [section, key] = name.split('-');

    if (
      key === 'ijazahNumber' &&
      form.calonPesertaDidik.ijazahNumber.indexOf('DN-') === 0 &&
      value.length < 3
    )
      return;

    setForm((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [key]: value,
      },
    }));
  };

  const handlePrestasiInputTextChange = (e) => {
    const { name, value } = e.target;
    const [section, idx, key] = name.split('-');

    setForm((prevState) => ({
      ...prevState,
      [section]: prevState[section].map((prestasi, prestasiIdx) => {
        if (prestasiIdx === parseInt(idx)) {
          return {
            ...prestasi,
            [key]: value,
          };
        }

        return prestasi;
      }),
    }));
  };

  const handleAddPrestasi = () => {
    setForm((prev) => ({
      ...prev,
      prestasi: [
        {
          type: null,
          level: null,
          predicate: null,
          activity: '',
          file: null,
        },
        ...prev.prestasi,
      ],
    }));
  };

  const handleRemovePrestasi = () => {
    if (form.prestasi.length < 1) return;

    setForm((prev) => ({
      ...prev,
      prestasi: prev.prestasi.slice(0, -1),
    }));
  };

  const handleUploadPrestasi = (file, idx) => {
    setForm((prevState) => ({
      ...prevState,
      prestasi: prevState.prestasi.map((prestasi, prestasiIdx) => {
        if (prestasiIdx === parseInt(idx)) {
          return {
            ...prestasi,
            file,
          };
        }

        return prestasi;
      }),
    }));
  };

  console.log(form);

  return (
    <div>
      <Head>
        <title>Form Pendaftaran | Pondok Pesantren Al Hadi</title>
        <meta
          name="description"
          content="Pendaftaran Santri dan Santriwati Pondok Pesantren Al Hadi Sungkai Langka"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout withFooter>
        <h2 className={styles.pendaftaranTitle}>Formulir Pendaftaran</h2>
        <div className={styles.pendaftaranContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3>DATA DIRI PESERTA DIDIK</h3>
            <FormPesertaDidik
              form={form.calonPesertaDidik}
              handleInputTextChange={handleInputTextChange}
              handleSelectChange={handleSelectChange}
            />
            <FormAsalSekolah
              form={form.schoolOrigin}
              handleInputTextChange={handleInputTextChange}
            />
            <FormNilaiPesertaDidik
              form={form.calonPesertaDidikScore}
              handleSelectChange={handleSelectChange}
            />
            <FormPrestasiPesertaDidik
              form={form.prestasi}
              handleAddPrestasi={handleAddPrestasi}
              handleRemovePrestasi={handleRemovePrestasi}
              handleInputTextChange={handlePrestasiInputTextChange}
              handleSelectChange={handleSelectChange}
              handleUploadPrestasi={handleUploadPrestasi}
            />
          </form>
        </div>
      </PageLayout>
    </div>
  );
};

export default FormPenerimaan;
