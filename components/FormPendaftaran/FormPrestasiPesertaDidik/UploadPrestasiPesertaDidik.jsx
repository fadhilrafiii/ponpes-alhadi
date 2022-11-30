import Img from 'components/base/Img';

import { convertBytes } from 'shared/utils/file';

import styles from '../FormPendaftaran.module.scss';

const UploadPrestasiPesertaDidik = ({
  file,
  name,
  dragActive,
  handleDragFile,
  handleDropFile,
  handleChangeFile,
}) => {
  return (
    <div className={styles.fieldContainer} onDragEnter={handleDragFile}>
      <label className={styles.labelUpload}>
        Lampiran Piagam/Sertifikat <span className={styles.required}>*</span>
      </label>
      <div className={styles.uploadPrestasiContainer}>
        <Img
          src={file ? '/icons/file.svg' : '/icons/upload.svg'}
          layout="fixed"
          alt="Upload Prestasi"
          width={32}
          height={file ? 40 : 32}
          priority
        />
        <span>
          {file ? (
            <span>
              Diupload <br />
              {file.name} - {convertBytes(file.size, 'KB')} KB
            </span>
          ) : (
            <span>
              Seret dan Lepas disini <br /> atau
            </span>
          )}
        </span>
        {!file && (
          <>
            <label htmlFor="upload-prestasi" className={styles.uploadPrestasi}>
              Unggah berkas <br />
            </label>
            <span className={styles.maxFile}>berkas PDF/JPG maksimum 1MB</span>
          </>
        )}
      </div>
      {!file && (
        <input
          type="file"
          id="upload-prestasi"
          style={{ opacity: 0, height: 0 }}
          name={name}
          value={file ? undefined : ''}
          accept="application/pdf, image/jpeg"
          onChange={handleChangeFile}
          required
        />
      )}
      {dragActive && (
        <div
          className={styles.dragAndDrop}
          onDragEnter={handleDragFile}
          onDragLeave={handleDragFile}
          onDragOver={handleDragFile}
          onDrop={handleDropFile}
        ></div>
      )}
    </div>
  );
};

export default UploadPrestasiPesertaDidik;
