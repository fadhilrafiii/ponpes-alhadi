import Head from 'next/head';
import Link from 'next/link';
import { useCallback, useEffect, useMemo } from 'react';

import { fasilitasList } from 'constants/home';

import Carousel from 'components/base/Carousel';
import Img from 'components/base/Img';

import { getNews, getNewsDetail } from 'client/news';
import { getVideos } from 'client/video';

// import MyButton from 'components/base/MyButton';
import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/Home.module.scss';

import AssignmentIcon from 'public/icons/assignment.svg';
import fotoBersamaPutriPic from 'public/images/foto-bersama-putri.jpg';

const Home = ({ videos, news }) => {
  const availableVideos = useMemo(
    () => Object.values(videos).filter((video) => video.url),
    [videos],
  );

  const testFetchNewsDetail = useCallback(async () => {
    const res = await getNewsDetail(
      'MasyaAllah Santri Pondok Pesantren Al Hadi Ini Mengaji Al Qur’an Suaranya Merdu Sekali',
    );
    console.log(res.data.content);
  }, []);

  useEffect(() => {
    testFetchNewsDetail();
  }, [testFetchNewsDetail]);

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
              <Link href="/penerimaan">Pendaftaran Santri</Link>
            </div>
          </div>
        </section>
        {news.length > 0 && (
          <section id="news" className={styles.newsSection}>
            <h2>BERITA TERBARU</h2>
            <Carousel
              className={styles.newsCarousel}
              config={{
                fade: false,
                autoplay: false,
                arrows: true,
                slidesToShow: 3,
              }}
            >
              {news.map((news, idx) => (
                <div key={idx} className={styles.newsCard}>
                  <div className={styles.newsImage}>
                    <Img layout="fill" src={news.banner} alt={news.title} priority />
                  </div>
                  <div className={styles.newsContent}>
                    <div className={styles.titleContainer}>
                      <h4>{news.title}</h4>
                    </div>
                    <Link href={`/berita/${news.title}`}>
                      <a className={styles.continue}>selengkapnya...</a>
                    </Link>
                  </div>
                </div>
              ))}
            </Carousel>
          </section>
        )}
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
                    priority
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
              slidesToShow: 3,
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
          </div>
        </section>
        {availableVideos.length > 0 && (
          <section id="video" className={styles.videoSection}>
            <h2>VIDEO</h2>
            <Carousel
              config={{
                fade: false,
                autoplay: false,
                arrows: true,
                slidesToShow: 3,
                responsive: [
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                    },
                  },
                  {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 2,
                    },
                  },
                ],
              }}
            >
              {availableVideos.map((v, idx) => (
                <div className={styles.videoContent} key={idx}>
                  <div className={styles.videoImage}>
                    <iframe
                      className={styles.iframe}
                      src={v.url}
                      srcDoc={
                        // eslint-disable-next-line quotes, max-len
                        `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${v.url}/?autoplay=1><img src=${v.thumbnail} alt='Kata Babe Haikal Hasan Tentang Pondok Pesantren Al-Hadi'><span>▶</span></a>`
                      }
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      frameBorder={0}
                      allowFullScreen
                    />
                  </div>
                  <p>{v.title}</p>
                </div>
              ))}
            </Carousel>
          </section>
        )}
      </PageLayout>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await Promise.all([getVideos(), getNews({ limit: 5 })]);
  return {
    props: {
      videos: res[0]?.data || [],
      news: res[1]?.data || {},
    },
    revalidate: 60, // In seconds
  };
};

export default Home;
