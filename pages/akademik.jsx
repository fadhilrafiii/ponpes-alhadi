import Head from 'next/head';
import Link from 'next/link';

import { ekstrakurikulers } from 'constants/akademik';

import Carousel from 'components/base/Carousel';
import Img from 'components/base/Img';

import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/Akademik.module.scss';

import AssignmentIcon from 'public/icons/assignment.svg';
import kbmPic from 'public/images/kbm-putra-2.jpg';
import kelasPic from 'public/images/kelas.jpg';
import keseharianPic from 'public/images/keseharian.jpg';

const Akademik = () => {
  return (
    <div>
      <Head>
        <title>Akademik | Pondok Pesantren Al Hadi</title>
        <meta
          name="description"
          content="Akademik - Pondok Pesantren Al Hadi | Pondok Pesantren Al Hadi Sungkai Langka adalah Pondok Pesantren yang bertempat di Pesawaran, Lampung. Kami Membentuk generasi umat yang sholih, menjaga Al Quran dan Sunnah Nabi Muhammad SAW tangguh dalam menaklukkan tantangan zaman"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout withFooter>
        <section id="akademik-banner" className={styles.bannerSection}>
          <div className={styles.imageWrapper}>
            <Img
              src={kbmPic}
              alt="Halaman Pondok Pesantren Al Hadi"
              priority
              placeholder="blur"
              sizes="(max-width: 560px) 560px, (max-width: 768px0 768px, (max-width: 1200px) 1000px, 1200px"
            />
            <h1>AKADEMIK</h1>
          </div>
        </section>
        <section id="kurikulum" className={styles.kurikulumSection}>
          <h2>KURIKULUM</h2>
          <div className={styles.kurikulumWrapper}>
            <div className={styles.kurikulumItem}>
              <Img
                src={AssignmentIcon}
                alt="Kurikulum Pondok Pesantren Al Hadi Icon"
                width={70}
                height={85}
                placeholder="empty"
                priority
              />
              <p>Kurikulum Pondok Tahfidzul Qur&rsquo;an</p>
            </div>
            <div className={styles.kurikulumItem}>
              <Img
                src={AssignmentIcon}
                alt="Kurikulum Pondok Pesantren Al Hadi Icon"
                width={70}
                height={85}
                placeholder="empty"
              />
              <p>Kurikulum Nasional Setingkat SMP/ Tsanawivah</p>
            </div>
            <div className={styles.kurikulumItem}>
              <Img
                src={AssignmentIcon}
                alt="Kurikulum Pondok Pesantren Al Hadi Icon"
                width={70}
                height={85}
                placeholder="empty"
              />
              <p>Kurikulum Madrasah Diniyyah</p>
            </div>
          </div>
          <p className={styles.kurikulumRef}>
            (berdasarkan pada Undang-Undang Sisdiknas nomor 20 tahun 2003 pasal 30 ayat 3, dan 4, PP
            tentang Standar Nasional Pendidikan (SNP) nomor 19 Tahun 2005 pasal 93, Surat Keputusan
            Menteri Pendidikan Nasional nomor 106/0/2000, PP nomor 55 tahun 2007 tentang Pendidikan
            Agama dan Pendidikan Keagamaan, Peraturan Menteri Agama Republik Indonesia nomor 13
            tahun 2014 tentang Pendidikan Keagamaan Islam, Peraturan Menteri Agama nomor 18 tahun
            2014 tentang Satuan Pendidikan Muadalah pada Pondok Pesantren ).
          </p>
        </section>
        <section id="target-pendidikan" className={styles.targetSection}>
          <h2>TARGET PENDIDIKAN</h2>
          <div className={styles.targetWrapper}>
            <div className={styles.imageWrapper}>
              <Img
                layout="fill"
                src={kelasPic}
                alt="Kelas Pondok Pesantren Al-Hadi"
                placeholder="bluer"
                priority
              />
            </div>
            <div>
              <h4>
                Lulusan pondok pesantren Al Hadi setingkat SMP/MTs diharapkan memiliki kompetansi
                sebagai berikut :
              </h4>
              <ol>
                <li>Memiliki hafalan Alquran minimal 20 juz dan bisa menterjemahkan lafdziyyah</li>
                <li>Hafal hadist Arba’in nawawiyyah dan terjemahannya</li>
                <li>Khatam kitab hadist Riyadhus Sholihin dan mampu menterjemahkannya</li>
                <li>Memahami ilmu fiqih dasar, Muatholah hadist dasar, ushul fiqih pengantar</li>
                <li>Menggunakan bahasa arab dan inggris percakapan harian dan tulisan</li>
                <li>Menguasai teknologi informatika menengah</li>
                <li>Menguasai ilmu pengetahuan umum setingkat Tsanawiyah</li>
                <li>Berakhlak mulia, bersemangat dalam mengembangkan ilmu dan menyampaikannya</li>
              </ol>
            </div>
          </div>
        </section>
        <section id="keseharian-santri" className={styles.dailySection}>
          <h2>KESEHARIAN SANTRI</h2>
          <div className={styles.imageWrapper}>
            <Img
              layout="fill"
              src={keseharianPic}
              alt="Kelas Pondok Pesantren Al-Hadi"
              placeholder="bluer"
              priority
            />
          </div>
        </section>
        <section id="ekstrakurikuler" className={styles.ekstrakurikuler}>
          <h2>KEGIATAN EKSTRAKURIKULER</h2>
          <div className={styles.ekstrakurikulerWrapper}>
            <Carousel config={{ slidesToShow: 3, fade: false, arrows: true }}>
              {ekstrakurikulers.map(({ image, title, body, to }, idx) => (
                <div className={styles.ekstrakurikulerCard} key={idx}>
                  <div className={styles.imageWrapper}>
                    <Img
                      layout="fill"
                      src={image}
                      alt="Kelas Pondok Pesantren Al-Hadi"
                      placeholder="bluer"
                      priority
                    />
                  </div>
                  <div className={styles.ekstrakurikulerContent}>
                    <h4>{title}</h4>
                    <p>{body}</p>
                    <div className={styles.link}>
                      <Link href={to}>read more</Link>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Akademik;
