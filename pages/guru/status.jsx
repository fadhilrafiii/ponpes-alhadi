import Head from 'next/head';
import Link from 'next/link';

import { useSelector } from 'react-redux';

import Img from 'components/base/Img';
import TableBox from 'components/TableBox';

import withAuth from 'shared/hocs/withAuth';
import PageLayout from 'shared/layouts/PageLayout';
import { selectUserProfile } from 'shared/redux/slices/user-slice';

import styles from 'styles/Status.module.scss';

import dummyProfilePic from 'public/images/dummy-profile-guru.jpg';

const StatusGuru = () => {
  const userProfile = useSelector(selectUserProfile);

  return (
    <div>
      <Head>
        <title>Status Guru | Pondok Pesantren Al Hadi</title>
        <meta name="description" content="Info akademik seputar Guru Pondok Pesantren Al Hadi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout withSecondFooter>
        <section id="status-guru" className={styles.statusSection}>
          <h1>Status Guru</h1>
          <div className={styles.statusWrapper}>
            <div className={styles.statusLeft}>
              <TableBox title="Status Guru">
                <div className={styles.status}>
                  <div className={styles.guruImageWrapper}>
                    <Img
                      src={dummyProfilePic}
                      alt={userProfile.fullName || 'Foto Profil'}
                      placeholder="blur"
                    />
                  </div>
                  <table>
                    <tbody>
                      <tr>
                        <td>NIP</td>
                        <td>:</td>
                        <td>{userProfile.nip}</td>
                      </tr>
                      <tr>
                        <td>Nama</td>
                        <td>:</td>
                        <td>{userProfile.fullName}</td>
                      </tr>
                      <tr>
                        <td>Mata Pelajaran</td>
                        <td>:</td>
                        <td>
                          {userProfile?.lessons?.length > 0 ? userProfile?.lessons.join(', ') : '-'}
                        </td>
                      </tr>
                      <tr>
                        <td>Tahun Masuk</td>
                        <td>:</td>
                        <td>{userProfile.entryYear}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TableBox>
            </div>
            <div className={styles.statusRight}>
              <TableBox title="Links">
                <div className={styles.link}>
                  <Link href="/kalender">Kalender Akademik</Link>
                </div>
                <div className={styles.link}>
                  <Link href="/guru/input-nilai">Input Nilai</Link>
                </div>
              </TableBox>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export const getServerSideProps = withAuth('Guru', () => {
  return { props: {} };
});

export default StatusGuru;
