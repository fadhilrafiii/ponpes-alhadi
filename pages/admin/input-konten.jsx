import Head from 'next/head';
import React from 'react';

import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/Admin.module.scss';

const InputKonten = () => {
  return (
    <div>
      <Head>
        <title>Input Berita/Video | Pondok Pesantren Al Hadi</title>
        <meta
          name="description"
          content="Input Berita/Video Pondok Pesantren Al Hadi Sungkai Langka"
        />
        <link rel="icon" href="/favicon.ico" />{' '}
      </Head>
      <PageLayout withSecondFooter>
        <div className={styles.inputKontenContainer}>
          <h2 className={styles.inputKontenTitle}>Input Berita Terbaru/Video</h2>
        </div>
      </PageLayout>
    </div>
  );
};

export default InputKonten;
