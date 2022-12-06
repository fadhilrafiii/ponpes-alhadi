import Head from 'next/head';
import Link from 'next/link';

import Img from 'components/base/Img';

import withAuth from 'shared/hocs/withAuth';
import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/Santri.module.scss';

import ChartIcon from 'public/icons/chart.svg';
import EditIcon from 'public/icons/edit-filled.svg';
import ProfileIcon from 'public/icons/profile.svg';

const SiswaPage = () => {
  return (
    <div>
      <Head>
        <title>Santri | Pondok Pesantren Al Hadi</title>
        <meta
          name="description"
          content="Masuk untuk dapatkan info seputar Pondok Pesantren Al Hadi atau mengelola hal-hal terkait akademik bagi guru, santri, dan santriwati Pondok Pesantren Al Hadi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <div className={styles.container}>
          <div className={styles.menuWrapper}>
            <Link href="/admin/pengunjung">
              <div className={styles.menu}>
                <div className={styles.imageWrapper}>
                  <Img
                    src={ChartIcon}
                    layout="fixed"
                    width={67}
                    height={67}
                    alt="Lihat Pengunjung Website"
                    priority
                  />
                </div>
                <h3>Lihat Pengunjung Website</h3>
              </div>
            </Link>
            <Link href="/admin/hasil-pendaftaran">
              <div className={styles.menu}>
                <div className={styles.imageWrapper}>
                  <Img
                    src={ProfileIcon}
                    alt="Hasil Pendaftaran Santri Baru"
                    layout="fixed"
                    width={67}
                    height={67}
                    priority
                  />
                </div>
                <h3>Hasil Pendaftaran Santri Baru</h3>
              </div>
            </Link>
            <Link href="/admin/input-berita">
              <div className={styles.menu}>
                <div className={styles.imageWrapper}>
                  <Img
                    src={EditIcon}
                    alt="Input Berita Terbaru/Foto"
                    layout="fixed"
                    width={67}
                    height={67}
                    priority
                  />
                </div>
                <h3>Input Berita Terbaru/Foto</h3>
              </div>
            </Link>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export const getServerSideProps = withAuth('Admin', () => {
  return { props: {} };
});

export default SiswaPage;
