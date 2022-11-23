import Head from 'next/head';
import Link from 'next/link';
import { useMemo } from 'react';

import { useSelector } from 'react-redux';

import Img from 'components/base/Img';
import LineChart from 'components/Chart/Line';
import TableBox from 'components/TableBox';

import { performanceScore } from 'constants/performa';

import styles from 'styles/StatusSantri.module.scss';

import withAuth from 'shared/hocs/withAuth';
import PageLayout from 'shared/layouts/PageLayout';
import { selectUserProfile } from 'shared/redux/slices/user-slice';

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
      <PageLayout>
        <section id="status-santri" className={styles.statusSantriSection}>
          <h1>Status Santri</h1>
          <div className={styles.statusSantriWrapper}>
            <div className={styles.statusSantriLeft}>
              <TableBox title="Status Santri">
                <div className={styles.statusSantri}>
                  <div className={styles.santriImageWrapper}>
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
            <div className={styles.statusSantriRight}>
              <TableBox title="Links">
                <div className={styles.santriPerformance}>
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

export const getServerSideProps = withAuth(() => {
  return { props: {} };
});

export default StatusSantri;
