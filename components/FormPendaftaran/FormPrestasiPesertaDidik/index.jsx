import React, { useState } from 'react';

import {
  prestasiLevelOptions,
  prestasiPredicateOptions,
  prestasiTypeOptions,
} from 'constants/form';
import PropTypes from 'prop-types';

import Input from 'components/Input';
import Select from 'components/Select';

import UploadPrestasiPesertaDidik from './UploadPrestasiPesertaDidik';

import styles from '../FormPendaftaran.module.scss';

const FormPrestasiPesertaDidik = ({
  form,
  handleAddPrestasi,
  handleRemovePrestasi,
  handleInputTextChange,
  handleSelectChange,
  handleUploadPrestasi,
}) => {
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
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUploadPrestasi(e.dataTransfer.files[0], idx);
    }
  };

  const handleChangeFile = (e, idx) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleUploadPrestasi(e.target.files[0], idx);
    }
  };

  return (
    <div className={styles.container}>
      <h3>IV. Prestasi Calon Peserta Didik</h3>
      <div className={styles.blank}>Kosongkan jika tidak memiliki prestasi</div>
      <button type="button" onClick={handleAddPrestasi} className={styles.button}>
        <span>+</span>
        Tambah Data Prestasi
      </button>
      {form.map((formGroup, idx) => {
        return (
          <React.Fragment key={idx}>
            <div className={styles.formGroup}>
              <div className={styles.fieldContainer}>
                <Select
                  value={formGroup.type}
                  onChange={(val) => handleSelectChange(`prestasi-${idx}-type`, val)}
                  name={`prestasi-${idx}-type`}
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
              />
            </div>
            {idx !== form.length - 1 && <hr />}
          </React.Fragment>
        );
      })}
      {form.length > 0 && (
        <button type="button" onClick={handleRemovePrestasi} className={styles.buttonMinus}>
          <span>&#8211;</span>
          Hapus Data Prestasi
        </button>
      )}
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
};

export default FormPrestasiPesertaDidik;
