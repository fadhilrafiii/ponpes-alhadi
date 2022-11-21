import PageLayout from 'layouts/PageLayout';

import Img from 'components/base/Img';
import LoginGuruBox from 'components/LoginGuruBox';
import LoginSiswaBox from 'components/LoginSantriBox';

import styles from 'styles/Login.module.scss';

import welcomeBlurPic from 'public/images/welcome-blur.jpg';

const LoginPage = () => {
  return (
    <PageLayout>
      <section id="banner" className={styles.bannerSection}>
        <div className={styles.bannerWrapper}>
          <div className={styles.imageWrapper}>
            <Img
              src={welcomeBlurPic}
              alt="Selamat Datang di Pondok Pesantren Al Hadi Sungkai Langka"
              sizes="(max-width: 560px) 600px, 1200px"
              priority
              quality={100}
            />
          </div>
          <div className={styles.bannerText}>
            <p>
              “Whoever learns something in the name of Allah, seeking that which is with Him, he
              will win. And whoever learns something for other than Allah, he will not reach the
              goal, nor will his acquired knowledge bring him closer to Allah.”
              <br />
              <br />
              Al-Hasan al-Basri
            </p>
            <h1>Selamat Datang,</h1>
          </div>
        </div>
      </section>
      <section id="login-box" className={styles.loginSection}>
        <div className={styles.loginBoxWrapper}>
          <div>
            <LoginSiswaBox />
          </div>
          <div>
            <LoginGuruBox />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LoginPage;
