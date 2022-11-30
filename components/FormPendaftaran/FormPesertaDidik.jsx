import { addressTypeOptions, genderOptions } from 'constants/form';
import PropTypes from 'prop-types';

import Input from 'components/Input';
import Radio from 'components/RadioButton';
import Select from 'components/Select';

import styles from './FormPendaftaran.module.scss';

const FormPendaftaran = ({ form, handleInputTextChange, handleSelectChange }) => {
  return (
    <div className={styles.container}>
      <h3>I. Identitas Calon Peserta Didik</h3>
      <div className={styles.fieldContainer}>
        <Input
          value={form.name}
          required
          onChange={handleInputTextChange}
          name="calonPesertaDidik-name"
          label="Nama Calon Peserta Didik"
        />
      </div>
      <div className={styles.fieldContainer}>
        <Radio
          value={form.gender}
          required
          onChange={handleInputTextChange}
          name="calonPesertaDidik-gender"
          label="Jenis Kelamin"
          options={genderOptions}
        />
      </div>
      <div className={styles.fieldContainer}>
        <Input
          type="number"
          value={form.nisn}
          required
          onChange={handleInputTextChange}
          name="calonPesertaDidik-nisn"
          label="NISN (Nomor Induk Siswa Nasional)"
        />
      </div>
      <div className={styles.fieldContainer}>
        <Input
          type="number"
          value={form.nis}
          required
          onChange={handleInputTextChange}
          name="calonPesertaDidik-nis"
          label="NIS (Nomor Induk Siswa)"
        />
      </div>
      <div className={styles.fieldContainer}>
        <Input
          value={form.ijazahNumber}
          required
          onChange={handleInputTextChange}
          name="calonPesertaDidik-ijazahNumber"
          label="Nomor Seri Ijazah SD/MI"
        />
      </div>
      <div className={styles.fieldContainer}>
        <Input
          type="number"
          value={form.nik}
          required
          onChange={handleInputTextChange}
          name="calonPesertaDidik-nik"
          label="NIK (Nomor Induk Kependudukan)"
        />
      </div>
      <div className={styles.twoColumnInputWrapper}>
        <div className={styles.fieldContainer}>
          <Input
            value={form.birthPlace}
            required
            onChange={handleInputTextChange}
            name="calonPesertaDidik-birthPlace"
            label="Tempat Lahir"
          />
        </div>
        <div className={styles.fieldContainer}>
          <Input
            type="date"
            value={form.birthDate}
            required
            onChange={handleInputTextChange}
            name="calonPesertaDidik-birthDate"
            label="Tanggal Lahir"
          />
        </div>
      </div>
      <div className={styles.fieldContainer}>
        <Input
          value={form.specialNeeds}
          required
          onChange={handleInputTextChange}
          name="calonPesertaDidik-specialNeeds"
          placeholder="Jika tidak berkebutuhan khusus, isi '-'"
          label="Berkebutuhan Khusus"
        />
      </div>
      <div className={styles.fieldContainer}>
        <Input
          value={form.address}
          required
          onChange={handleInputTextChange}
          name="calonPesertaDidik-address"
          label="Alamat Tempat Tinggal"
        />
      </div>
      <div className={styles.twoColumnInputWrapper}>
        <div className={styles.fieldContainer}>
          <Input
            value={form.province}
            required
            onChange={handleInputTextChange}
            name="calonPesertaDidik-province"
            label="Provinsi"
          />
        </div>
        <div className={styles.fieldContainer}>
          <Input
            value={form.district}
            required
            onChange={handleInputTextChange}
            name="calonPesertaDidik-district"
            label="Kecamatan"
          />
        </div>
      </div>
      <div className={styles.twoColumnInputWrapper}>
        <div className={styles.fieldContainer}>
          <Input
            value={form.city}
            required
            onChange={handleInputTextChange}
            name="calonPesertaDidik-city"
            label="Kabupaten/Kota"
          />
        </div>
        <div className={styles.fieldContainer}>
          <Input
            value={form.subdistrict}
            required
            onChange={handleInputTextChange}
            name="calonPesertaDidik-subdistrict"
            label="Kelurahan/Desa"
          />
        </div>
      </div>
      <div className={styles.fieldContainer}>
        <Select
          value={form.addressType}
          onChange={(val) => handleSelectChange('calonPesertaDidik-addressType', val)}
          name="calonPesertaDidik-addressType"
          label="Jenis Tinggal"
          required
          options={addressTypeOptions}
        />
      </div>
      <div className={styles.twoColumnInputWrapper}>
        <div className={styles.fieldContainer}>
          <Input
            type="number"
            value={form.addressPhone}
            onChange={handleInputTextChange}
            name="calonPesertaDidik-addressPhone"
            label="Nomor Telepon Tempat Tinggal"
          />
        </div>
        <div className={styles.fieldContainer}>
          <Input
            type="number"
            value={form.phone}
            required
            onChange={handleInputTextChange}
            name="calonPesertaDidik-phone"
            label="Nomor Handphone"
          />
        </div>
      </div>
      <div className={styles.fieldContainer}>
        <Input
          type="email"
          value={form.email}
          onChange={handleInputTextChange}
          name="calonPesertaDidik-email"
          label="Email Pribadi"
        />
      </div>
    </div>
  );
};

FormPendaftaran.propTypes = {
  form: PropTypes.shape().isRequired,
  handleInputTextChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};

export default FormPendaftaran;
