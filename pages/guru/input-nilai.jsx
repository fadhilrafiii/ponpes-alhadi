import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

import { dummyClass, dummyNilaiSiswa, dummySubject } from 'constants/input-nilai';

import Img from 'components/base/Img';
import Select from 'components/Select';
import TableBox from 'components/TableBox';

import withAuth from 'shared/hocs/withAuth';
import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/Status.module.scss';

import EditIcon from 'public/icons/edit.svg';

const InputNilai = () => {
  const [filter, setFilter] = useState({
    class: 'VII A',
    subject: 'Matematika',
  });
  const [selectedNilaiIdx, setSelectedNilaiIdx] = useState(null);
  const editRef = useRef(null);

  const handleChangeSelect = (name, val) => {
    setFilter((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleEditNilai = (idx) => {
    setSelectedNilaiIdx(idx);
  };

  const handleChangeNilai = (idx, value) => {
    dummyNilaiSiswa[idx].nilai = parseInt(value, 10).toString();
  };

  const validateNilai = (e, idx) => {
    if (!e.target.value) dummyNilaiSiswa[idx].nilai = 0;
    if (e.target.value > 100) {
      const limitedVal = parseInt(dummyNilaiSiswa[idx].nilai.toString().slice(0, 2));
      dummyNilaiSiswa[idx].nilai = limitedVal === 10 ? 100 : limitedVal;
    }

    setSelectedNilaiIdx(null);
  };

  const actionPressEnter = (e) => {
    if (e.charCode === 13) editRef.current.blur();
  };

  useEffect(() => {
    if (editRef && editRef.current) editRef.current.focus();
  }, [selectedNilaiIdx]);

  return (
    <div>
      <Head>
        <title>Input Nilai | Pondok Pesantren Al Hadi</title>
        <meta
          name="description"
          content="Input nilai santri dan santriwati Pondok Pesantren Al Hadi Sungkai Langka"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout withSecondFooter>
        <section id="input-nilai" className={styles.statusSection}>
          <h1>Input Nilai</h1>
          <div className={styles.inputNilaiContainer}>
            <div className={styles.selectWrapper}>
              <Select
                value={filter.class}
                options={dummyClass}
                onChange={(val) => handleChangeSelect('class', val)}
                name="class"
                placeholder="Kelas"
                defaultValue="Kelas"
              />
              <Select
                value={filter.subject}
                options={dummySubject}
                onChange={(val) => handleChangeSelect('subject', val)}
                name="subject"
                defaultValue="Mata Pelajaran"
              />
            </div>
            {filter.class && filter.subject && (
              <div className={styles.inputNilaiTable}>
                <TableBox title="Data Nilai Siswa">
                  <table>
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>NISN</th>
                        <th>Nilai</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dummyNilaiSiswa.map((ns, idx) => {
                        return (
                          <tr key={idx}>
                            <td>{idx + 1}</td>
                            <td>{ns.name}</td>
                            <td>{ns.nisn}</td>
                            <td>
                              <div className={styles.nilaiField}>
                                <input
                                  min={0}
                                  max={100}
                                  type="number"
                                  ref={selectedNilaiIdx === idx ? editRef : null}
                                  value={selectedNilaiIdx !== idx ? ns.nilai : undefined}
                                  readOnly={selectedNilaiIdx !== idx}
                                  onKeyPress={actionPressEnter}
                                  onBlur={(e) => validateNilai(e, idx)}
                                  onChange={(e) => handleChangeNilai(idx, e.target.value)}
                                />
                                {selectedNilaiIdx !== idx && (
                                  <span role="button" onClick={() => handleEditNilai(idx)}>
                                    <Img
                                      src={EditIcon}
                                      alt="Edit Nilai"
                                      layout="fixed"
                                      width={20}
                                      height={20}
                                      priority
                                    />
                                  </span>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </TableBox>
              </div>
            )}
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export const getServerSideProps = withAuth('Guru', () => {
  return { props: {} };
});

export default InputNilai;
