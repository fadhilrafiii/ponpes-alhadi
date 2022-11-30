import Head from 'next/head';
import { useState } from 'react';

import { COLORS } from 'constants/colors';

import Img from 'components/base/Img';
import {
  FormAsalSekolah,
  FormNilaiPesertaDidik,
  FormOrangTua,
  FormPesertaDidik,
  FormPrestasiPesertaDidik,
  FormWali,
} from 'components/FormPendaftaran';

import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/FormPenerimaan.module.scss';

const FormPenerimaan = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
    father: {
      name: '',
      isAlive: 'Ya',
      specialNeeds: '',
      birthPlace: '',
      birthDate: null,
      address: '',
      lastStudy: null,
      job: '',
      income: '',
      addressPhone: '',
      phone: '',
    },
    mother: {
      name: '',
      isAlive: 'Ya',
      specialNeeds: '',
      birthPlace: '',
      birthDate: null,
      address: '',
      lastStudy: null,
      job: '',
      income: '',
      addressPhone: '',
      phone: '',
    },
    wali: {
      name: '',
      specialNeeds: '',
      birthPlace: '',
      birthDate: null,
      address: '',
      lastStudy: null,
      addressPhone: '',
      phone: '',
    },
  });

  const handleResetFormWali = () => {
    setForm((prev) => ({
      ...prev,
      wali: {
        name: '',
        specialNeeds: '',
        birthPlace: '',
        birthDate: null,
        address: '',
        lastStudy: null,
        addressPhone: '',
        phone: '',
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPage === 1) {
      window.scrollTo(0, 91);
      setCurrentPage(2);
    } else console.log(form);
  };

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

  const actionClickSameAddressWithSantri = (who) => {
    setForm((prevState) => ({
      ...prevState,
      [who]: {
        ...prevState[who],
        address: prevState.calonPesertaDidik.address,
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
        [key]: value.toUpperCase(),
      },
    }));
  };

  const handlePrestasiSelectChange = (name, value) => {
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

  const handlePrestasiInputTextChange = (e) => {
    const { name, value } = e.target;
    const [section, idx, key] = name.split('-');

    setForm((prevState) => ({
      ...prevState,
      [section]: prevState[section].map((prestasi, prestasiIdx) => {
        if (prestasiIdx === parseInt(idx)) {
          return {
            ...prestasi,
            [key]: value.toUpperCase(),
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
        ...prev.prestasi,
        {
          type: null,
          level: null,
          predicate: null,
          activity: '',
          file: null,
        },
      ],
    }));
  };

  const handleRemovePrestasi = (deletedIdx) => {
    setForm((prev) => ({
      ...prev,
      prestasi: prev.prestasi.filter((pres, idx) => idx !== deletedIdx),
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

  const handleChangePage = (page) => {
    if (page !== currentPage) {
      setCurrentPage(page);
      window.scrollTo(0, 91);
    }
  };

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
            {currentPage === 1 && (
              <>
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
                  handleSelectChange={handlePrestasiSelectChange}
                  handleUploadPrestasi={handleUploadPrestasi}
                />
              </>
            )}
            {currentPage === 2 && (
              <>
                <h3 style={{ marginBottom: 24 }}>DATA DIRI ORANG TUA/WALI</h3>
                <h3>V. Data Orang Tua</h3>
                <FormOrangTua
                  label="father"
                  form={form.father}
                  handleInputTextChange={handleInputTextChange}
                  handleSelectChange={handleSelectChange}
                  actionClickSameAddressWithSantri={() =>
                    actionClickSameAddressWithSantri('father')
                  }
                />
                <FormOrangTua
                  label="mother"
                  form={form.mother}
                  handleInputTextChange={handleInputTextChange}
                  handleSelectChange={handleSelectChange}
                  actionClickSameAddressWithSantri={() =>
                    actionClickSameAddressWithSantri('mother')
                  }
                />
                <FormWali
                  label="wali"
                  form={form.wali}
                  handleInputTextChange={handleInputTextChange}
                  actionClickSameAddressWithSantri={() => actionClickSameAddressWithSantri('wali')}
                  onHideFormWali={handleResetFormWali}
                />
                <button type="submit" value="submit-form" className={styles.submitButton}>
                  Submit
                </button>
              </>
            )}
            <div
              style={{
                margin: '36px 0 24px',
                textAlign: 'right',
                fontWeight: 700,
                color: COLORS.BlackGrey,
              }}
            >
              Halaman
            </div>
            <div className={styles.pagination}>
              <button
                type="button"
                onClick={() => handleChangePage(1)}
                className={styles.page}
                style={{ opacity: currentPage === 1 ? 0 : 1 }}
              >
                <Img
                  src="/icons/chevron-left-green.svg"
                  alt="Previous Page"
                  layout="fixed"
                  width={10}
                  height={20}
                  priority
                />
              </button>
              <button
                type="button"
                onClick={() => handleChangePage(1)}
                className={currentPage === 1 ? styles.activePage : styles.page}
              >
                1
              </button>
              <button
                type="submit"
                value="submit-first-page"
                className={currentPage === 2 ? styles.activePage : styles.page}
              >
                2
              </button>
              {currentPage === 1 && (
                <button value="submit-next-page" type="submit" className={styles.page}>
                  <Img
                    src="/icons/chevron-right-green.svg"
                    alt="Next Page"
                    layout="fixed"
                    width={10}
                    height={20}
                    priority
                  />
                </button>
              )}
            </div>
          </form>
        </div>
      </PageLayout>
    </div>
  );
};

export default FormPenerimaan;
