import PropTypes from 'prop-types';

import Input from 'components/Input';

import styles from './FormPendaftaran.module.scss';

const FormAsalSekolah = ({ form, handleInputTextChange }) => {
  return (
    <div className={styles.container}>
      <h3>II. Sekolah Asal</h3>
      <div className={styles.fieldContainer}>
        <Input
          value={form.name}
          required
          onChange={handleInputTextChange}
          name="schoolOrigin-name"
          label="Nama Sekolah"
        />
      </div>
      <div className={styles.fieldContainer}>
        <Input
          value={form.city}
          required
          onChange={handleInputTextChange}
          name="schoolOrigin-city"
          label="Kabupaten/Kota"
        />
      </div>
      <div className={styles.fieldContainer}>
        <Input
          value={form.address}
          required
          onChange={handleInputTextChange}
          name="schoolOrigin-address"
          label="Alamat Sekolah"
        />
      </div>
    </div>
  );
};

FormAsalSekolah.propTypes = {
  form: PropTypes.shape().isRequired,
  handleInputTextChange: PropTypes.func.isRequired,
};

export default FormAsalSekolah;
