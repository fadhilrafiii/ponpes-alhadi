import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { COLORS } from 'constants/colors';
import { useDispatch } from 'react-redux';

import Img from 'components/base/Img';
import LoadingSpinner from 'components/base/LoadingSpinner';
import {
  FormAsalSekolah,
  FormNilaiPesertaDidik,
  FormOrangTua,
  FormPesertaDidik,
  FormPrestasiPesertaDidik,
  FormWali,
} from 'components/FormPendaftaran';

import { postPendaftaranAPI } from 'client/pendaftaran';
import { uploadFile } from 'client/upload-file';

import PageLayout from 'shared/layouts/PageLayout';
import { showSnackbar } from 'shared/redux/slices/snackbar-slice';

import styles from 'styles/FormPenerimaan.module.scss';

import ChevronLeftGreen from 'public/icons/chevron-left-green.svg';
import ChevronRightGreen from 'public/icons/chevron-right-green.svg';

const FormPenerimaan = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [isUploading, setIsUploading] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    calonPesertaDidik: {
      name: '',
      gender: '',
      nisn: '',
      nis: '',
      ijazahNumber: 'DN-',
      nik: '',
      birthPlace: '',
      birthDate: '',
      specialNeeds: '',
      address: '',
      province: '',
      district: '',
      city: '',
      subdistrict: '',
      addressType: '',
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
      score: '',
    },
    prestasi: [],
    father: {
      name: '',
      isAlive: 'Ya',
      specialNeeds: '',
      birthPlace: '',
      birthDate: '',
      address: '',
      lastStudy: '',
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
      birthDate: '',
      address: '',
      lastStudy: '',
      job: '',
      income: '',
      addressPhone: '',
      phone: '',
    },
    wali: {
      name: '',
      specialNeeds: '',
      birthPlace: '',
      birthDate: '',
      address: '',
      lastStudy: '',
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

  const handleDeletePrestasiFile = (deletedIdx) => {
    setForm((prev) => ({
      ...prev,
      prestasi: prev.prestasi.map((pres, idx) =>
        idx === deletedIdx ? { ...pres, file: null } : pres,
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentPage === 1) {
      window.scrollTo(0, 91);
      setCurrentPage(2);
    } else {
      setIsSubmitting(true);
      const res = await postPendaftaranAPI(form);

      if (res.success) {
        dispatch(showSnackbar({ message: res.message, type: 'success' }));
        router.push('/');
      }
      setIsSubmitting(false);
    }
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
      form.calonPesertaDidik.ijazahNumber?.indexOf('DN-') === 0 &&
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
          tipe: null,
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

  const handleUploadPrestasi = async (file, idx) => {
    setIsUploading(idx);
    const res = await uploadFile(file);

    if (!res.success) return setIsUploading(null);

    setForm((prevState) => ({
      ...prevState,
      prestasi: prevState.prestasi.map((prestasi, prestasiIdx) => {
        if (prestasiIdx === parseInt(idx)) {
          return {
            ...prestasi,
            file: {
              name: file.name,
              size: file.size,
              url: res.data,
            },
          };
        }

        return prestasi;
      }),
    }));
    setIsUploading(null);
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
        <h2 className={styles.goToMobile}>
          Mohon gunakan laptop atau komputer untuk pendaftaran calon santri!
        </h2>
        <div className={styles.formPendaftaranWrapper}>
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
                    handleDeletePrestasiFile={handleDeletePrestasiFile}
                    isUploading={isUploading}
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
                    actionClickSameAddressWithSantri={() =>
                      actionClickSameAddressWithSantri('wali')
                    }
                    onHideFormWali={handleResetFormWali}
                  />
                  <button
                    type="submit"
                    value="submit-form"
                    disabled={isSubmitting}
                    className={styles.submitButton}
                  >
                    {isSubmitting ? <LoadingSpinner /> : 'Submit'}
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
                    src={ChevronLeftGreen}
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
                      src={ChevronRightGreen}
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
        </div>
      </PageLayout>
    </div>
  );
};

export default FormPenerimaan;
