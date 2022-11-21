import Head from 'next/head';

import PageLayout from 'layouts/PageLayout';

import Dropdown from 'components/base/Dropdown';
import Img from 'components/base/Img';

import { fasilitasList } from 'constants/home';
import { faqs } from 'constants/tentang-kami';

import styles from 'styles/TentangKami.module.scss';

import halamanPic from 'public/images/halaman.jpg';

const TentangKami = () => {
  return (
    <div>
      <Head>
        <title>Tentang Kami | Pondok Pesantren Al Hadi</title>
        <meta
          name="description"
          content="Tentang Kami - Pondok Pesantren Al Hadi | Pondok Pesantren Al Hadi Sungkai Langka adalah Pondok Pesantren yang bertempat di Pesawaran, Lampung. Kami Membentuk generasi umat yang sholih, menjaga Al Quran dan Sunnah Nabi Muhammad SAW tangguh dalam menaklukkan tantangan zaman"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout withFooter>
        <section id="tentang-kami-banner" className={styles.bannerSection}>
          <div className={styles.imageWrapper}>
            <Img
              src={halamanPic}
              alt="Halaman Pondok Pesantren Al Hadi"
              priority
              sizes="(max-width: 560px) 560px, (max-width: 768px0 768px, (max-width: 1200px) 1000px, 1200px"
            />
            <h1>TENTANG KAMI</h1>
          </div>
        </section>
        <section id="visi-misi" className={styles.visionSection}>
          <div className={styles.visionWrapper}>
            <h2>Visi</h2>
            <p>
              Membentuk generasi umat yang sholih, menjaga Al Quran dan Sunnah Nabi Muhammad SAW
              tangguh dalam menaklukkan tantangan zaman
            </p>
            <br /> <br />
            <h2>Misi</h2>
            <p>
              Mewujudkan Lembaga Pendidikan Islam berbasis Tahfidhul Qur an dan Sunnah yang unggul,
              kompetitif dan menjadi alternatif masa kini dan kedepan
            </p>
            <p>
              Menyiapkan generasi Islam yang sholih, menjaga Al Quran dan Sunnah Nabi Muhammad SAW,
              cerdas,aktif, solutif, kreatif, responsif, kompetitif serta tangguh dalam menaklukan
              tantangan zaman
            </p>
            <p>
              Menyiapkan generasi sholih yang berilmu, beramal, berdakwah, menjaga ukhwah, cinta
              negara dan bangsa nya sebagai wujud cinta kepada Allah SWT, Muhammad Rasulullah, para
              sahabat dan ulama
            </p>
          </div>
        </section>
        <section id="fasilitas" className={styles.facilitySection}>
          <h2>FASILITAS PONDOK</h2>
          <div className={styles.fasilitasWrapper}>
            {fasilitasList.map((fasilitas, idx) => (
              <div key={idx} className={styles.fasilitasContent}>
                <div className={styles.fasilitasImageWrapper}>
                  <Img
                    layout="fill"
                    src={fasilitas.image.src}
                    alt={fasilitas.image.alt}
                    priority={idx === 0}
                    sizes="(max-width: 560px) 600px, (max-width: 1200px) 800px, 1200px"
                  />
                </div>
                <p>{fasilitas.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="faq" className={styles.faqSection}>
          <h2>FAQs (Frequently Asked Questions)</h2>
          <div className={styles.faqWrapper}>
            {faqs.map((faq, faqIdx) => (
              <div key={faqIdx}>
                <Dropdown
                  text={<h3>{faq.title}</h3>}
                  containerClassName={styles.faqQuestionContainer}
                  textClassName={styles.faqTitle}
                  isOpenInitially
                >
                  {faq.content.map(({ question, answer }, questionIdx) => (
                    <div key={questionIdx}>
                      <Dropdown text={<h4>{question}</h4>} textClassName={styles.faqQuestion}>
                        <p className={styles.faqAnswer}>{answer}</p>
                      </Dropdown>
                    </div>
                  ))}
                </Dropdown>
              </div>
            ))}
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default TentangKami;
