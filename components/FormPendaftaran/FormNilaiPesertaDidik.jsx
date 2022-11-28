import { hafalanTypeOptions } from 'constants/form';
import PropTypes from 'prop-types';

import Select from 'components/Select';

import styles from './FormPendaftaran.module.scss';

const FormNilaiPesertaDidik = ({ form, handleSelectChange }) => {
  return (
    <div className={styles.container}>
      <h3>III. Data Nilai Calon Peserta Didik</h3>
      <div className={styles.fieldContainer}>
        <Select
          value={form.addressType}
          onChange={(val) => handleSelectChange('calonPesertaDidikScore-score', val)}
          name="calonPesertaDidikScore-score"
          label="Hafalan Al-Quran yang dimiliki"
          required
          options={hafalanTypeOptions}
        />
      </div>
    </div>
  );
};

FormNilaiPesertaDidik.propTypes = {
  form: PropTypes.shape().isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};

export default FormNilaiPesertaDidik;
