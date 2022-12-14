import Head from 'next/head';
import Link from 'next/link';

import { performanceScore } from 'constants/performa';
import { useSelector } from 'react-redux';

import Img from 'components/base/Img';
import LineChart from 'components/Chart/Line';
import TableBox from 'components/TableBox';

import withAuth from 'shared/hocs/withAuth';
import PageLayout from 'shared/layouts/PageLayout';
import { selectUserProfile } from 'shared/redux/slices/user-slice';

import styles from 'styles/Status.module.scss';

import dummyProfilePic from 'public/images/dummy-profile.webp';

const StatusSantri = () => {
  const userProfile = useSelector(selectUserProfile);

  return (
    <div>
      <Head>
        <title>Status Santri | Pondok Pesantren Al Hadi</title>
        <meta name="description" content="Info akademik seputar Santri Pondok Pesantren Al Hadi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout withSecondFooter>
        <section id="status-santri" className={styles.statusSection}>
          <h1>Status Santri</h1>
          <div className={styles.statusWrapper}>
            <div className={styles.statusLeft}>
              <TableBox title="Status Santri">
                <div className={styles.status}>
                  <div className={styles.ImageWrapper}>
                    <Img
                      src={dummyProfilePic}
                      alt={userProfile.fullName || 'Foto Profil'}
                      placeholder="blur"
                    />
                  </div>
                  <table>
                    <tbody>
                      <tr>
                        <td>NISN</td>
                        <td>:</td>
                        <td>{userProfile.nisn}</td>
                      </tr>
                      <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td>{userProfile.fullName}</td>
                      </tr>
                      <tr>
                        <td>Kelas</td>
                        <td>:</td>
                        <td>{userProfile.class || '-'}</td>
                      </tr>
                      <tr>
                        <td>Tahun Masuk</td>
                        <td>:</td>
                        <td>{userProfile.entryYear}</td>
                      </tr>
                      <tr>
                        <td>Wali Kelas</td>
                        <td>:</td>
                        <td>{userProfile.homeRoomClass || '-'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TableBox>
              <TableBox title="Links">
                <div className={styles.link}>
                  <Link href="/kalender">Kalender Akademik</Link>
                </div>
                <div className={styles.link}>
                  <Link href="/transkrip">Transkrip Nilai</Link>
                </div>
              </TableBox>
            </div>
            <div className={styles.statusRight}>
              <TableBox title="Perkembangan Studi">
                <div className={styles.Performance}>
                  <LineChart
                    data={[
                      {
                        data: performanceScore,
                      },
                    ]}
                    xLabel="semester"
                    yLabel="score"
                  />
                </div>
              </TableBox>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export const getServerSideProps = withAuth('Santri', () => {
  return { props: {} };
});

export default StatusSantri;
