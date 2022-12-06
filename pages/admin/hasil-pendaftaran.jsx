import Head from 'next/head';
import React from 'react';

import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/Admin.module.scss';

const HasilPendaftaran = () => {
  return (
    <div>
      <Head>
        <title>Hasil Pendaftaran Santri | Pondok Pesantren Al Hadi</title>
        <meta
          name="description"
          content="Hasil Pendaftaran Santri Pondok Pesantren Al Hadi Sungkai Langka"
        />
        <link rel="icon" href="/favicon.ico" />{' '}
      </Head>
      <PageLayout withSecondFooter>
        <div className={styles.hasilPendaftaranContainer}>
          <h2 className={styles.hasilPendaftaranTitle}>Hasil Pendaftaran Santri Baru</h2>
        </div>
      </PageLayout>
    </div>
  );
};

export default HasilPendaftaran;
