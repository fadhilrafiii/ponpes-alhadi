import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import PageLayout from 'layouts/PageLayout';

import Img from 'components/base/Img';
import MyButton from 'components/base/MyButton';
import GaleriCard from 'components/GaleriCard';

import { galleryCardList } from 'constants/galeri';

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
        <section id="gallery" className={styles.galeriSection}>
          <h1>Galeri</h1>
          <div className={styles.galeriCardWrapper}>
            {galleryCardList.map((galeri, idx) => (
              <GaleriCard key={idx} {...galeri} />
            ))}
          </div>
        </section>
        <section id="profile" className={styles.profileSection}>
          <div className={styles.profileWrapper}>
            <h1>PONDOK PESANTREN AL-HADI</h1>
            <p>
              Pondok Modern berbasis Tahfidhzul Quran dan Ulumiyyah yang terintegrasi dengan Ilmu{' '}
              <br />
              Pengetahuan dan Teknologi sehinga akan melahirkan generasi “Penjaga Al Quran dan
              Sunnah”
              <br />
              yang tangguh dalam menghadapi tantangan masa depan.
              <br />
              <br />
              Semoga Allah ‘Azza wa Jalla senantiasa memberikan keistiqomahan langkah, hidayah serta
              <br />
              pertolonganNya.
            </p>
          </div>
          <h4>Kurikulum</h4>
          <p>Kurikulum yang diterapkan di Pondok Pesantren Al-Hadi adalah perpaduan dari</p>
          <div className={styles.kurikulumWrapper}>
            <div className={styles.kurikulumItem}>
              <Img
                src="/icons/assignment.svg"
                alt="Kurikulum Pondok Pesantren Al Hadi Icon"
                width={70}
                height={85}
                placeholder="empty"
              />
              <p>Kurikulum Pondok Tahfidzul Qur&rsquo;an</p>
            </div>
            <div className={styles.kurikulumItem}>
              <Img
                src="/icons/assignment.svg"
                alt="Kurikulum Pondok Pesantren Al Hadi Icon"
                width={70}
                height={85}
                placeholder="empty"
              />
              <p>
                Kurikulum Nasional
                <br /> Setingkat SMP/ Tsanawivah
              </p>
            </div>
            <div className={styles.kurikulumItem}>
              <Img
                src="/icons/assignment.svg"
                alt="Kurikulum Pondok Pesantren Al Hadi Icon"
                width={70}
                height={85}
                placeholder="empty"
              />
              <p>Kurikulum Madrasah Diniyyah</p>
            </div>
          </div>
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
              <h4>Visi</h4>
              <p>
                Membentuk generasi umat yang solih, menjaga Al-Qur’an & Sunnah Nabi Muhammad SAW,
                serta tangguh dalam menaklukan tantangan zaman
              </p>
              <h4>Misi</h4>
              <p>
                Lulusan Pondok Pesantren Al-Hadi setingkat SMP/MTs diharapkan memiliki kompetensi
                sebagai berikut:
                <ol>
                  <li>
                    Memiliki hafalan Al-Qur&rsquo;an 20 Juz dan bisa menerjemahkan Al-Qur&rsquo;.
                  </li>
                  <li>Hafal Hadits Arba&rsquo; Nawawiyyah & terjemahannya.</li>
                  <li>
                    Khattam kitab Hadits Riyadhus Sholihin & mampu menerjemahkannya, memahami ilmu
                    fiqih dasar, Mustholah hadits dasar, Ushul fiqih pengantar.
                  </li>
                  <li>
                    Menggunakan bahasa Arab & bahasa Inggris dalam percakapan harian & tulisan.
                  </li>
                  <li>Menguasai teknologi informatika menengah.</li>
                  <li>
                    Menguasai ilmu pengetahuan umum setingkat Tsanawiyah, berakhlah mulia,
                    bersemangat dalam mengembangkan ilmu & menyampaikannya.
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </section>
        <section id="fasilitas" className={styles.fasilitasSection}>
          <h2>Fasilitas</h2>
          <div className={styles.fasilitasWrapper}>
            <div className={styles.fasilitasContent}>
              <div className={styles.fasilitasImageWrapper}>
                <div className={styles.dropShadow} />
                <Img
                  layout="fill"
                  src={fotoBersamaPutriPic}
                  alt="Foto Bersama Putri Pondok Pesantren Al-Hadi"
                  sizes="(max-width: 560px) 600px, (max-width: 1200px) 800px, 1200px"
                />
              </div>
              <h2>Arena Lapangan & Sarana Olahraga</h2>
            </div>
          </div>
        </section>
        <section id="video" className={styles.videoSection}>
          <h2>Video</h2>
          <div className={styles.videoWrapper}>
            <p>
              “Whoever learns something in the name of Allah, seeking that which is with Him, he
              will win. And whoever learns something for other than Allah, he will not reach the
              goal, nor will his acquired knowledge bring him closer to Allah.”
              <br />
              <br />
              Al-Hasan al-Basri
            </p>
            <div className={styles.videoContent}>
              <Img
                layout="fill"
                src={fotoBersamaPutriPic}
                alt="Foto Bersama Putri Pondok Pesantren Al-Hadi"
                sizes="(max-width: 560px) 600px, (max-width: 1200px) 800px, 1200px"
              />
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Home;
