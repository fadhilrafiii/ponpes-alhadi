import { incomeOptions, isAliveOptions, lastStudyOptions } from 'constants/form';
import PropTypes from 'prop-types';

import Input from 'components/Input';
import Radio from 'components/RadioButton';
import Select from 'components/Select';

import styles from './FormPendaftaran.module.scss';

const FormOrangTua = ({
  label,
  form,
  handleInputTextChange,
  handleSelectChange,
  actionClickSameAddressWithSantri,
}) => {
  return (
    <div className={styles.container}>
      {label && <h3>{label === 'father' ? 'Ayah' : 'Ibu'}</h3>}
      <div className={styles.fieldContainer}>
        <Input
          value={form.name}
          required
          onChange={handleInputTextChange}
          name={`${label}-name`}
          label={`Nama ${label === 'father' ? 'Ayah' : 'Ibu'}`}
        />
      </div>
      <div className={styles.fieldContainer}>
        <Radio
          value={form.isAlive}
          required
          onChange={handleInputTextChange}
          name={`${label}-isAlive`}
          label="Masih Hidup"
          options={isAliveOptions}
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
      <div className={styles.fieldContainer}>
        <Select
          value={form.lastStudy}
          onChange={(val) => handleSelectChange(`${label}-lastStudy`, val)}
          name={`${label}-lastStudy`}
          label="Pendidikan Terakhir"
          required
          options={lastStudyOptions}
        />
      </div>
      <div className={styles.fieldContainer}>
        <Input
          value={form.job}
          required
          onChange={handleInputTextChange}
          name={`${label}-job`}
          label={`Pekerjaan ${label === 'father' ? 'Ayah' : 'Ibu'}`}
        />
      </div>
      <div className={styles.fieldContainer}>
        <Select
          value={form.income}
          onChange={(val) => handleSelectChange(`${label}-income`, val)}
          name={`${label}-income`}
          label="Penghasilan Per Bulan"
          required
          options={incomeOptions}
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
    </div>
  );
};

FormOrangTua.propTypes = {
  label: PropTypes.string,
  form: PropTypes.shape().isRequired,
  handleInputTextChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  actionClickSameAddressWithSantri: PropTypes.func.isRequired,
};

export default FormOrangTua;
