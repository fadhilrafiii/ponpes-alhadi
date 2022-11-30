import React, { useState } from 'react';

import {
  prestasiLevelOptions,
  prestasiPredicateOptions,
  prestasiTypeOptions,
} from 'constants/form';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Input from 'components/Input';
import Select from 'components/Select';

import { showSnackbar } from 'shared/redux/slices/snackbar-slice';

import UploadPrestasiPesertaDidik from './UploadPrestasiPesertaDidik';

import styles from '../FormPendaftaran.module.scss';

const VALID_PRESTASI_FILE_EXTENSION = ['pdf', 'jpg', 'jpeg'];

const FormPrestasiPesertaDidik = ({
  form,
  handleAddPrestasi,
  handleRemovePrestasi,
  handleInputTextChange,
  handleSelectChange,
  handleUploadPrestasi,
  handleDeletePrestasiFile,
  isUploading,
}) => {
  const dispatch = useDispatch();
  const [dragActive, setDragActive] = useState(false);

  const handleDragFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDropFile = (e, idx) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const { files = [] } = e.dataTransfer;
    if (files[0]) {
      const file = files[0];

      if (file.size > 1000000)
        return dispatch(showSnackbar({ message: 'Berkas melebihi 1MB!', type: 'error' }));
      if (!VALID_PRESTASI_FILE_EXTENSION.includes(file.name.split('.').pop()))
        return dispatch(
          showSnackbar({ message: 'Berkas harus berformat PDF atau JPG!', type: 'error' }),
        );

      handleUploadPrestasi(files[0], idx);
    }
  };

  const handleChangeFile = (e, idx) => {
    e.preventDefault();
    const { files = [] } = e.target;
    if (files[0]) {
      const file = files[0];

      if (file.size > 1000000)
        return dispatch(showSnackbar({ message: 'Berkas melebihi 1MB!', type: 'error' }));

      handleUploadPrestasi(files[0], idx);
    }
  };

  return (
    <div className={styles.container}>
      <h3>IV. Prestasi Calon Peserta Didik</h3>
      <div className={styles.blank}>Kosongkan jika tidak memiliki prestasi</div>
      {form.map((formGroup, idx) => {
        return (
          <React.Fragment key={idx}>
            <div className={styles.formGroup}>
              <div className={styles.fieldContainer}>
                <Select
                  value={formGroup.tipe}
                  onChange={(val) => handleSelectChange(`prestasi-${idx}-tipe`, val)}
                  name={`prestasi-${idx}-tipe`}
                  label="Jenis Prestasi"
                  required
                  options={prestasiTypeOptions}
                />
              </div>
              <div className={styles.fieldContainer}>
                <Select
                  value={formGroup.level}
                  onChange={(val) => handleSelectChange(`prestasi-${idx}-level`, val)}
                  name={`prestasi-${idx}-level`}
                  label="Tingkat"
                  required
                  options={prestasiLevelOptions}
                />
              </div>
              <div className={styles.fieldContainer}>
                <Select
                  value={formGroup.predicate}
                  onChange={(val) => handleSelectChange(`prestasi-${idx}-predicate`, val)}
                  name={`prestasi-${idx}-predicate`}
                  label="Jenis Prestasi"
                  required
                  options={prestasiPredicateOptions}
                />
              </div>
              <div className={styles.fieldContainer}>
                <Input
                  value={formGroup.activity}
                  required
                  onChange={handleInputTextChange}
                  name={`prestasi-${idx}-activity`}
                  label="Nama Kegiatan"
                />
              </div>
              <UploadPrestasiPesertaDidik
                file={formGroup.file}
                name={`prestasi-${idx}-file`}
                dragActive={dragActive}
                handleDragFile={handleDragFile}
                handleDropFile={(e) => handleDropFile(e, idx)}
                handleChangeFile={(e) => handleChangeFile(e, idx)}
                handleDeleteFile={() => handleDeletePrestasiFile(idx)}
                isUploading={idx === isUploading}
              />
            </div>
            <button
              type="button"
              onClick={() => handleRemovePrestasi(idx)}
              className={styles.buttonMinus}
            >
              <span>&#8211;</span>
              Hapus Data Prestasi
            </button>
            {idx !== form.length - 1 && <hr />}
          </React.Fragment>
        );
      })}
      <button type="button" onClick={handleAddPrestasi} className={styles.button}>
        <span>+</span>
        Tambah Data Prestasi
      </button>
    </div>
  );
};

FormPrestasiPesertaDidik.propTypes = {
  form: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleAddPrestasi: PropTypes.func.isRequired,
  handleRemovePrestasi: PropTypes.func.isRequired,
  handleInputTextChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleUploadPrestasi: PropTypes.func.isRequired,
  handleDeletePrestasiFile: PropTypes.func.isRequired,
  isUploading: PropTypes.number,
};

export default FormPrestasiPesertaDidik;
