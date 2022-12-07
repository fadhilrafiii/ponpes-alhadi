import TableBox from 'components/TableBox';

import withAuth from 'shared/hocs/withAuth';
import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/Kurikulum.module.scss';

const Kurikulum = () => {
  return (
    <PageLayout withSecondFooter>
      <section id="kurikulum" className={styles.kurikulumSection}>
        <h1>Kurikulum</h1>
        <div className={styles.kurikulumWrapper}>
          <TableBox title="Kelas VII">
            <div className={styles.semesterWrapper}>
              <div className={styles.kurikulumtable}>
                <h4>Semester 1</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Kode</th>
                      <th>Mata Pelajaran</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Fisika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Kimia</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Biologi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TableBox>
          <TableBox title="Kelas VIII">
            <div className={styles.semesterWrapper}>
              <div className={styles.kurikulumtable}>
                <h4>Semester 1</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Kode</th>
                      <th>Mata Pelajaran</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Fisika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Kimia</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Biologi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TableBox>
          <TableBox title="Kelas IX">
            <div className={styles.semesterWrapper}>
              <div className={styles.kurikulumtable}>
                <h4>Semester 1</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Kode</th>
                      <th>Mata Pelajaran</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1111</td>
                      <td>Matematika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Fisika</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Kimia</td>
                    </tr>
                    <tr>
                      <td>1111</td>
                      <td>Biologi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TableBox>
        </div>
      </section>
    </PageLayout>
  );
};

export const getServerSideProps = withAuth(null, () => {
  return { props: {} };
});

export default Kurikulum;
