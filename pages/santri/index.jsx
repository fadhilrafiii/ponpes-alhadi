import Link from 'next/link';

import PageLayout from 'layouts/PageLayout';

import Img from 'components/base/Img';

import styles from 'styles/Santri.module.scss';

const SiswaPage = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.menuWrapper}>
          <Link href="/santri/status">
            <div className={styles.menu}>
              <div className={styles.imageWrapper}>
                <Img priority src="/icons/profile.svg" layout="fixed" width={67} height={67}></Img>
              </div>
              <h3>Status Santri</h3>
            </div>
          </Link>
          <Link href="/santri/kurikulum">
            <div className={styles.menu}>
              <div className={styles.imageWrapper}>
                <Img priority src="/icons/paper.svg" layout="fixed" width={56} height={72}></Img>
              </div>
              <h3>Kurikulum</h3>
            </div>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default SiswaPage;
