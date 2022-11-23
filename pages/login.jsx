import Head from 'next/head';

import { getAuthenticateAPI } from 'client/auth';
import PageLayout from 'shared/layouts/PageLayout';

import Img from 'components/base/Img';
import LoginGuruBox from 'components/LoginGuruBox';
import LoginSiswaBox from 'components/LoginSantriBox';

import styles from 'styles/Login.module.scss';

import welcomeBlurPic from 'public/images/welcome-blur.jpg';

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Login | Pondok Pesantren Al Hadi</title>
        <meta
          name="description"
          content="Masuk untuk dapatkan info seputar Pondok Pesantren Al Hadi atau mengelola hal-hal terkait akademik bagi santri dan santriwati Pondok Pesantren Al Hadi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <h2 className={styles.goToMobile}>
          Mohon gunakan desktop untuk login kedalam aplikasi ini!
        </h2>
        <section id="banner" className={styles.bannerSection}>
          <div className={styles.bannerWrapper}>
            <div className={styles.imageWrapper}>
              <Img
                src={welcomeBlurPic}
                alt="Selamat Datang di Pondok Pesantren Al Hadi Sungkai Langka"
                sizes="(max-width: 560px) 600px, 1200px"
                priority
                placeholder="blur"
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
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const cookie = ctx.req?.headers.cookie;

  const { status, data } = await getAuthenticateAPI({ headers: { cookie } });
  if (cookie && status === 200) {
    return {
      props: {},
      redirect: {
        destination: `/${data.type.toLowerCase()}`,
      },
    };
  }

  return { props: {} };
};

export default LoginPage;
