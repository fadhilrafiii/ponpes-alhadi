import Head from 'next/head';
import Link from 'next/link';

import withAuth from 'hocs/withAuth';

import Img from 'components/base/Img';

import styles from 'styles/Santri.module.scss';

import PageLayout from 'layouts/PageLayout';

const SiswaPage = () => {
  return (
    <div>
      <Head>
        <title>Santri | Pondok Pesantren Al Hadi</title>
        <meta
          name="description"
          content="Masuk untuk dapatkan info seputar Pondok Pesantren Al Hadi atau mengelola hal-hal terkait akademik bagi santri dan santriwati Pondok Pesantren Al Hadi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <div className={styles.container}>
          <div className={styles.menuWrapper}>
            <Link href="/santri/status">
              <div className={styles.menu}>
                <div className={styles.imageWrapper}>
                  <Img
                    src="/icons/profile.svg"
                    layout="fixed"
                    width={67}
                    height={67}
                    alt="Status Santri"
                    priority
                  />
                </div>
                <h3>Status Santri</h3>
              </div>
            </Link>
            <Link href="/santri/kurikulum">
              <div className={styles.menu}>
                <div className={styles.imageWrapper}>
                  <Img
                    src="/icons/paper.svg"
                    alt="Kurikulum"
                    layout="fixed"
                    width={56}
                    height={72}
                    priority
                  />
                </div>
                <h3>Kurikulum</h3>
              </div>
            </Link>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export const getServerSideProps = withAuth(() => {
  return { props: {} };
});

export default SiswaPage;
