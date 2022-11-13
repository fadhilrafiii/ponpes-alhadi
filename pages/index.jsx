import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import PageLayout from 'layouts/PageLayout';

import Img from 'components/base/Img';
import MyButton from 'components/base/MyButton';
import GaleryCard from 'components/GaleryCard';

import { galleryCardList } from 'constants/galery';

import styles from 'styles/Home.module.scss';

import fotoBersamaPutraHivePic from 'public/images/foto-bersama-putra-hive.png';
import fotoBersamaPutriPic from 'public/images/foto-bersama-putri.jpg';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Pondok Pesantren Al Hadi</title>
        <meta
          name="description"
          content="Masuk untuk dapatkan info seputar Pondok Pesantren Al Hadi atau mengelola hal-hal terkait akademik bagi santri dan santriwati Pondok Pesantren Al Hadi"
        />
        {/* <link rel="preconnect" href="" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout>
        <section id="main" className={styles.mainSection}>
          <div>
            <h2>PONDOK MODERN BERBASIS TAHFIDZUL QURAN DAN ULUMIYYAH</h2>
            <p>
              Melahirkan generasi “Penjaga Al Quran dan Sunnah” yang tangguh dalam menghadapi
              tatangan masa depan
            </p>
            <MyButton theme="secondary">LOGIN</MyButton>
          </div>
          <div>
            <div className={styles.dropShadow} />
            <Img
              layout="fill"
              src={fotoBersamaPutriPic}
              alt="Foto Bersama Putri Pondok Pesantren Al-Hadi"
              sizes="(max-width: 560px) 600px, (max-width: 1200px) 800px, 1200px"
            />
          </div>
        </section>
        <section id="gallery" className={styles.galerySection}>
          <h1>Galery</h1>
          <div className={styles.galeryCardWrapper}>
            {galleryCardList.map((galery, idx) => (
              <GaleryCard key={idx} {...galery} />
            ))}
          </div>
        </section>
        <section id="profile" className={styles.profileSection}>
          <h1>PONDOK PESANTREN AL-HADI</h1>
          <p>
            Pondok Modern berbasis Tahfidhzul Quran dan Ulumiyyah yang terintegrasi dengan Ilmu{' '}
            <br />
            Pengetahuan dan Teknologi sehinga akan melahirkan generasi “Penjaga Al Quran dan Sunnah”
            <br />
            yang tangguh dalam menghadapi tantangan masa depan.
            <br />
            <br />
            Semoga Allah ‘Azza wa Jalla senantiasa memberikan keistiqomahan langkah, hidayah serta
            <br />
            pertolonganNya.
          </p>
          <div className={styles.linksWrapper}>
            <div className={styles.link}>
              <Link href="/">Pendaftaran</Link>
            </div>
            <div className={styles.link}>
              <Link href="/">Download Brosur</Link>
            </div>
          </div>
        </section>
        <section id="quote" className={styles.quoteSection}>
          <div className={styles.quoteWrapper}>
            <div className={styles.imageWrapper}>
              <Img
                layout="fill"
                src={fotoBersamaPutraHivePic}
                alt="Foto Bersama Putra Pondok Pesantren Al-Hadi"
                sizes="(max-width: 560px) 400px, (max-width: 1200px) 600px, 800px"
              />
            </div>
            <div className={styles.quote}>
              <p>
                “Whoever learns something in the name
                <br /> of Allah, seeking that which is with Him, <br /> he will win. And whoever
                learns <br />
                something for other than Allah, he will not <br /> reach the goal, nor will his
                acquired <br /> knowledge bring him closer to Allah.”
                <br />
                <br /> Al-Hasan al-Basri
              </p>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Home;
