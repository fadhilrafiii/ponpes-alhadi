import Head from 'next/head';
import Link from 'next/link';

import Img from 'components/base/Img';

import withAuth from 'shared/hocs/withAuth';
import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/Santri.module.scss';

import EvalIcon from 'public/icons/eval.svg';
import PaperIcon from 'public/icons/paper.svg';
import ProfileIcon from 'public/icons/profile.svg';

const SiswaPage = () => {
  return (
    <div>
      <Head>
        <title>Guru | Pondok Pesantren Al Hadi</title>
        <meta
          name="description"
          content="Masuk untuk dapatkan info seputar Pondok Pesantren Al Hadi atau mengelola hal-hal terkait akademik bagi guru, santri, dan santriwati Pondok Pesantren Al Hadi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout withSecondFooter>
        <div className={styles.container}>
          <div className={styles.menuWrapper}>
            <Link href="/guru/status">
              <div className={styles.menu}>
                <div className={styles.imageWrapper}>
                  <Img
                    src={ProfileIcon}
                    layout="fixed"
                    width={67}
                    height={67}
                    alt="Status Guru"
                    priority
                  />
                </div>
                <h3>Status Guru</h3>
              </div>
            </Link>
            <Link href="/kurikulum">
              <div className={styles.menu}>
                <div className={styles.imageWrapper}>
                  <Img
                    src={PaperIcon}
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
            <Link href="/guru/input-nilai">
              <div className={styles.menu}>
                <div className={styles.imageWrapper}>
                  <Img
                    src={EvalIcon}
                    alt="Input Nilai"
                    layout="fixed"
                    width={56}
                    height={72}
                    priority
                  />
                </div>
                <h3>Input Nilai</h3>
              </div>
            </Link>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export const getServerSideProps = withAuth('Guru', () => {
  return { props: {} };
});

export default SiswaPage;
