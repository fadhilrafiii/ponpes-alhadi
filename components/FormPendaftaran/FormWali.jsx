import PropTypes from 'prop-types';

import Dropdown from 'components/base/Dropdown';
import Input from 'components/Input';

import styles from './FormPendaftaran.module.scss';

const FormWali = ({ label, form, handleInputTextChange, actionClickSameAddressWithSantri }) => {
  return (
    <div className={styles.container}>
      <Dropdown
        text={<h3>VI. Data Wali</h3>}
        containerClassName={styles.waliSectionForm}
        shouldRemoveDropdownContent
      >
        <div style={{ marginBottom: 0 }} className={styles.blank}>
          Tutup bagian wali jika tidak tinggal bersama wali
        </div>
        <h3>Wali</h3>
        <div className={styles.fieldContainer}>
          <Input
            value={form.name}
            required
            onChange={handleInputTextChange}
            name={`${label}-name`}
            label="Wali"
          />
        </div>
        <div className={styles.fieldContainer}>
          <Input
            value={form.specialNeeds}
            required
            onChange={handleInputTextChange}
            placeholder="Jika tidak berkebutuhan khusus, isi '-'"
            name={`${label}-specialNeeds`}
            label="Berkebutuhan Khusus"
          />
        </div>
        <div className={styles.twoColumnInputWrapper}>
          <div className={styles.fieldContainer}>
            <Input
              value={form.birthPlace}
              required
              onChange={handleInputTextChange}
              name={`${label}-birthPlace`}
              label="Tempat Lahir"
            />
          </div>
          <div className={styles.fieldContainer}>
            <Input
              type="date"
              value={form.birthDate}
              required
              onChange={handleInputTextChange}
              name={`${label}-birthDate`}
              label="Tanggal Lahir"
            />
          </div>
        </div>
        <div className={styles.fieldContainer}>
          <Input
            value={form.address}
            required
            onChange={handleInputTextChange}
            name={`${label}-address`}
            label="Alamat Lengkap"
            helperButtonText="Sama Seperti Calon Peserta Didik"
            onClickHelperButtonText={actionClickSameAddressWithSantri}
          />
        </div>
        <div className={styles.twoColumnInputWrapper}>
          <div className={styles.fieldContainer}>
            <Input
              type="number"
              value={form.addressPhone}
              onChange={handleInputTextChange}
              name={`${label}-addressPhone`}
              label="Nomor Telepon Tempat Tinggal"
            />
          </div>
          <div className={styles.fieldContainer}>
            <Input
              type="number"
              value={form.phone}
              required
              onChange={handleInputTextChange}
              name={`${label}-phone`}
              label="Nomor Handphone"
            />
          </div>
        </div>
      </Dropdown>
    </div>
  );
};

FormWali.propTypes = {
  label: PropTypes.string,
  form: PropTypes.shape().isRequired,
  handleInputTextChange: PropTypes.func.isRequired,
  actionClickSameAddressWithSantri: PropTypes.func.isRequired,
};

export default FormWali;
