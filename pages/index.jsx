import Head from 'next/head';
import Link from 'next/link';

import { fasilitasList, galleryCardList } from 'constants/home';

import Carousel from 'components/base/Carousel';
import Img from 'components/base/Img';
// import MyButton from 'components/base/MyButton';
import GaleriCard from 'components/GaleriCard';

import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/Home.module.scss';

import AssignmentIcon from 'public/icons/assignment.svg';
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageLayout showNavbarBottom withFooter>
        <section id="main" className={styles.mainSection}>
          <div>
            <div>
              <h1>PONDOK MODERN BERBASIS TAHFIDZUL QURAN DAN ULUMIYYAH</h1>
              <p>
                Melahirkan generasi “Penjaga Al Quran dan Sunnah” yang tangguh dalam menghadapi
                tatangan masa depan
              </p>
            </div>
            {/* <MyButton theme="secondary">LOGIN</MyButton> */}
          </div>
          <div>
            <div className={styles.dropShadow} />
            <Img
              layout="fill"
              src={fotoBersamaPutriPic}
              alt="Foto Bersama Putri Pondok Pesantren Al-Hadi"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
              priority
            />
          </div>
        </section>
        <section id="profile" className={styles.profileSection}>
          <div className={styles.profileWrapper}>
            <h2>PONDOK PESANTREN AL-HADI SUNGAI LANGKA</h2>
            <p>
              Pondok Modern berbasis Tahfidhzul Quran dan Ulumiyyah yang terintegrasi dengan Ilmu{' '}
              Pengetahuan dan Teknologi sehinga akan melahirkan generasi “Penjaga Al Quran dan
              Sunnah” yang tangguh dalam menghadapi tantangan masa depan.
              <br />
              <br />
              Semoga Allah ‘Azza wa Jalla senantiasa memberikan keistiqomahan langkah, hidayah serta
              pertolonganNya.
            </p>
          </div>
          <h3>Kurikulum</h3>
          <div className={styles.kurikulumWrapper}>
            <div className={styles.kurikulumItem}>
              <Img
                src={AssignmentIcon}
                alt="Kurikulum Pondok Pesantren Al Hadi Icon"
                width={70}
                height={85}
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
                priority
              />
              <p>Kurikulum Nasional Setingkat SMP/ Tsanawivah</p>
            </div>
            <div className={styles.kurikulumItem}>
              <Img
                src={AssignmentIcon}
                alt="Kurikulum Pondok Pesantren Al Hadi Icon"
                width={70}
                height={85}
                priority
              />
              <p>Kurikulum Madrasah Diniyyah</p>
            </div>
          </div>
          <div className={styles.linksWrapper}>
            <div className={styles.link}>
              <a href="/data/Brosur-Ponpes-TA-2023-2024.pdf" target="_blank" download>
                Download Brosur
              </a>
            </div>
            <div className={styles.link}>
              <Link href="/form-pendaftaran">Pendaftaran</Link>
            </div>
          </div>
        </section>
        <section id="gallery" className={styles.galeriSection}>
          <h2>GALERI</h2>
          <Carousel
            className={styles.galeriCarousel}
            config={{
              fade: false,
              autoplay: false,
              arrows: true,
            }}
          >
            {galleryCardList.map((galeri, idx) => (
              <div className={styles.galeriWrapper} key={idx}>
                <GaleriCard {...galeri} />
              </div>
            ))}
          </Carousel>
        </section>
        {/* <section id="quote" className={styles.quoteSection}>
          <div className={styles.quoteWrapper}>
            <div className={styles.imageWrapper}>
              <Img
                layout="fill"
                src={fotoBersamaPutraHivePic}
                alt="Foto Bersama Putra Pondok Pesantren Al-Hadi"
                sizes="(max-width: 560px) 300px, (max-width: 1200px) 400px, 500px"
              />
            </div>
            <div className={styles.quote}>
              <h4>Visi</h4>
              <p>
                Membentuk generasi umat yang solih, menjaga Al-Qur’an & Sunnah Nabi Muhammad SAW,
                serta tangguh dalam menaklukan tantangan zaman
              </p>
              <h4>Misi</h4>
              <div>
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
              </div>
            </div>
          </div>
        </section> */}
        <section id="fasilitas" className={styles.fasilitasSection}>
          <h2>FASILITAS</h2>
          <div className={styles.fasilitasWrapper}>
            {fasilitasList.map((fasilitas, idx) => (
              <div key={idx} className={styles.fasilitasContent}>
                <div className={styles.fasilitasImageWrapper}>
                  <Img
                    layout="fill"
                    src={fasilitas.image.src}
                    alt={fasilitas.image.alt}
                    sizes="(max-width: 768px) 196px, 306px"
                  />
                </div>
                <p>{fasilitas.desc}</p>
              </div>
            ))}
          </div>
          <Carousel
            className={styles.fasilitasCarousel}
            config={{
              fade: false,
              autoplay: false,
              arrows: true,
            }}
          >
            {fasilitasList.map((fasilitas, idx) => (
              <div key={idx} className={styles.fasilitasContent}>
                <div className={styles.fasilitasImageWrapper}>
                  <Img
                    layout="fill"
                    src={fasilitas.image.src}
                    alt={fasilitas.image.alt}
                    sizes="(max-width: 768px) 196px, 306px"
                  />
                </div>
                <p>{fasilitas.desc}</p>
              </div>
            ))}
          </Carousel>
        </section>
        <section id="quote" className={styles.quoteSection}>
          <div className={styles.quoteWrapper}>
            <p>
              “Whoever learns something in the name of Allah, seeking that which is with Him, he
              will win. And whoever learns something for other than Allah, he will not reach the
              goal, nor will his acquired knowledge bring him closer to Allah.”
              <br />
              <br />
              Al-Hasan al-Basri
            </p>
            {/* <div className={styles.imageWrapper}>
              <Img
                layout="fill"
                // src={fotoBersamaPutraHivePic}
                alt="Foto Bersama Putra Pondok Pesantren Al-Hadi"
                sizes="(max-width: 560px) 300px, (max-width: 1200px) 400px, 500px"
              />
            </div>
            <div className={styles.quote}>
              <h4>Visi</h4>
              <p>
                Membentuk generasi umat yang solih, menjaga Al-Qur’an & Sunnah Nabi Muhammad SAW,
                serta tangguh dalam menaklukan tantangan zaman
              </p>
              <h4>Misi</h4>
              <div>
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
              </div>
            </div> */}
          </div>
        </section>
        <section id="video" className={styles.videoSection}>
          <h2>VIDEO</h2>
          <div className={styles.videoWrapper}>
            <div className={styles.videoContent}>
              <div className={styles.videoImage}>
                <iframe
                  className={styles.iframe}
                  src="https://www.youtube.com/embed/tC5PmHTEZzE"
                  srcDoc={
                    // eslint-disable-next-line quotes
                    "<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/tC5PmHTEZzE/?autoplay=1><img src=https://img.youtube.com/vi/tC5PmHTEZzE/hqdefault.jpg alt='Kata Babe Haikal Hasan Tentang Pondok Pesantren Al-Hadi'><span>▶</span></a>"
                  }
                  title="Kata Babe Haikal Hasan Tentang Pondok Pesantren Al-Hadi"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
              <p>Kata Babe Haikal Hasan Tentang Pondok Pesantren Al-Hadi</p>
            </div>
            <div className={styles.videoContent}>
              <div className={styles.videoImage}>
                <iframe
                  className={styles.iframe}
                  // eslint-disable-next-line max-len
                  srcDoc={
                    // eslint-disable-next-line quotes
                    "<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/3cWiO2ftjNs/?autoplay=1><img src=https://img.youtube.com/vi/3cWiO2ftjNs/hqdefault.jpg alt='Sekolah atau Pesantren'><span>▶</span></a>"
                  }
                  title="Sekolah atau Pesantren | Ustad Khalid Basalamah"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p>Sekolah atau Pesantren</p>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Home;
