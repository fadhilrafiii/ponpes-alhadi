import Link from 'next/link';

import Img from 'components/base/Img';

import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/Penerimaan.module.scss';

import brosurLeftImg from 'public/images/brosur-left.jpg';
import brosurRighImg from 'public/images/brosur-right.jpg';

const Penerimaan = () => {
  return (
    <PageLayout withFooter>
      <section id="brosur-section" className={styles.brosurSection}>
        <div className={styles.brosurWrapper}>
          <div className={styles.brosurLeft}>
            <Img
              src={brosurLeftImg}
              alt="Brosur Pondok Pesantren Al Hadi Sungkai Langka"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
          </div>
          <div className={styles.brosurRight}>
            <Img
              layout="fill"
              src={brosurRighImg}
              alt="Brosur Pondok Pesantren Al Hadi Sungkai Langka"
              sizes="(max-width: 768px) 50vw, 33vw"
              priority
            />
            <div className={styles.brosurRightContent}>
              <h2>5 Poin Ponpes Al Hadi</h2>
              <ul>
                <li>Muatan Ilmu Lebih Banyak</li>
                <li>Pembelajaran Menyenangkan</li>
                <li>Fasilitas Lengkap</li>
                <li>Lingkungan Indah & Asri</li>
                <li>Biaya Terjangkau</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.brosurBottom}>
          <div>
            <h3>Gelombang 1</h3>
            <table>
              <tbody>
                <tr>
                  <td>Pendaftaran</td>
                  <td>1 Desember 2022 s/d 28 Februari 2023</td>
                </tr>
                <tr>
                  <td>Seleksi</td>
                  <td>6 Maret 2023</td>
                </tr>
                <tr>
                  <td>Pengumuman</td>
                  <td>8 Maret 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3>Gelombang 2</h3>
            <table>
              <tbody>
                <tr>
                  <td>Pendaftaran</td>
                  <td>1 Maret 2023 s/d 10 Juni 2023</td>
                </tr>
                <tr>
                  <td>Seleksi</td>
                  <td>12 Juni 2023</td>
                </tr>
                <tr>
                  <td>Pengumuman</td>
                  <td>15 Juni 2023</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <Link href="/">
              <a>Download Brosur</a>
            </Link>
            <Link href="/form-pendaftaran">
              <a>Pendaftaran</a>
            </Link>
          </div>
        </div>
      </section>
      <section id="syarat-pendaftaran" className={styles.syaratSection}>
        <h2>Syarat Pendaftaran</h2>
        <div>
          <ol>
            <li>Silakan isi form pendaftaran online berikut ini: Form Pendaftaran Online</li>
            <li>
              <span>Mengumpulkan Fotokopi:</span>
              <ul>
                <li>Ijazah SD/MI/ Rapor semester ganjil kelas VI</li>
                <li>KTP Orang Tua</li>
                <li>Kartu Keluarga</li>
                <li>Akta Lahir</li>
                <li>Pas Foto 3x4 (5 lembar)</li>
              </ul>
            </li>
            <li>
              Lakukan transfer biaya pendaftaran sebesar Rp150.000,00 ke Bank BRI Syariah Nomor
              Rekening 8154099992 a/n Yayasan Hasan Al Hadi
            </li>
            <li>
              Konfirmasi melalui Whatsapp ke 081279503322 (Umi Aisyah)/ 089626072735 (Ustadzah
              Fathimah)
            </li>
          </ol>
        </div>
      </section>
      <section id="lokasi-pendaftaran" className={styles.lokasiSection}>
        <h2>Lokasi Pendaftaran</h2>
        <div>
          <p>Pendaftaran dapat dilakukan di</p>
          <h4>Kantor Pondok Pesantren Al Hadi Sungkai Langka</h4>
          <p>Jalan Sungai Langka Kecamatan Gedong Tataan Kabupaten Pesawaran, Lampung</p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Penerimaan;
