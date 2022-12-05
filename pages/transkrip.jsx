import Head from 'next/head';

import { useSelector } from 'react-redux';

import Img from 'components/base/Img';
import TableBox from 'components/TableBox';

import withAuth from 'shared/hocs/withAuth';
import PageLayout from 'shared/layouts/PageLayout';
import { selectUserProfile } from 'shared/redux/slices/user-slice';

import styles from 'styles/Transkrip.module.scss';

import dummyProfilePic from 'public/images/dummy-profile.webp';

const Transkrip = () => {
  const userProfile = useSelector(selectUserProfile);

  return (
    <div>
      <Head>
        <title>Transkrip Nilai | Pondok Pesantren Al Hadi</title>
        <meta
          name="description"
          content="Transkrip Nilai Santri Pondok Pesantren Al Hadi Sungkai Langka"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <section id="transkrip-nilai" className={styles.statusSection}>
          <h1>Transkrip Nilai</h1>
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
            </div>
            <div className={styles.statusRight}>
              <div className={styles.tableBoxContainer}>
                <TableBox title="Kelas VII">
                  <div className={styles.kurikulumtable}>
                    <h4>Semester 1</h4>
                    <table>
                      <thead>
                        <tr>
                          <th>Kode</th>
                          <th>Mata Pelajaran</th>
                          <th>Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={styles.kurikulumtable}>
                    <h4>Semester 2</h4>
                    <table>
                      <thead>
                        <tr>
                          <th>Kode</th>
                          <th>Mata Pelajaran</th>
                          <th>Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Fisika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Kimia</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Biologi</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TableBox>
              </div>
              <div className={styles.tableBoxContainer}>
                <TableBox title="Kelas VIII">
                  <div className={styles.kurikulumtable}>
                    <h4>Semester 1</h4>
                    <table>
                      <thead>
                        <tr>
                          <th>Kode</th>
                          <th>Mata Pelajaran</th>
                          <th>Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={styles.kurikulumtable}>
                    <h4>Semester 2</h4>
                    <table>
                      <thead>
                        <tr>
                          <th>Kode</th>
                          <th>Mata Pelajaran</th>
                          <th>Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Fisika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Kimia</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Biologi</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TableBox>
              </div>
              <div className={styles.tableBoxContainer}>
                <TableBox title="Kelas IX">
                  <div className={styles.kurikulumtable}>
                    <h4>Semester 1</h4>
                    <table>
                      <thead>
                        <tr>
                          <th>Kode</th>
                          <th>Mata Pelajaran</th>
                          <th>Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className={styles.kurikulumtable}>
                    <h4>Semester 2</h4>
                    <table>
                      <thead>
                        <tr>
                          <th>Kode</th>
                          <th>Mata Pelajaran</th>
                          <th>Nilai</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1111</td>
                          <td>Matematika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Fisika</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Kimia</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>1111</td>
                          <td>Biologi</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TableBox>
              </div>
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

export default Transkrip;
