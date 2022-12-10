import Head from 'next/head';
import React, { useState } from 'react';

import { inputTypeOptions } from 'constants/general';

import InputBerita from 'components/InputKonten/InputBerita';
import InputVideo from 'components/InputKonten/InputVideo';
import Select from 'components/Select';

import { getVideos } from 'client/video';

import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/Admin.module.scss';

const InputKonten = ({ videos }) => {
  const [filter, setFilter] = useState('video');

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
          <div className={styles.inputKontenFilter}>
            <Select value={filter} onChange={setFilter} options={inputTypeOptions} />
          </div>

          {filter === 'video' && (
            <div className={styles.inputKontenWrapper}>
              <InputVideo videos={videos} />
            </div>
          )}
          {filter === 'berita' && <InputBerita news={[]} />}
        </div>
      </PageLayout>
    </div>
  );
};

export const getServerSideProps = async () => {
  const videos = await getVideos({ isAdmin: true });

  return {
    props: {
      videos: videos.data,
    },
  };
};

export default InputKonten;
