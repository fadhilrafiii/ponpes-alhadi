import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';

import { COLORS } from 'constants/colors';

import LoadingSpinner from 'components/base/LoadingSpinner';

import { getHasilPendaftaranAPI } from 'client/hasilPendaftaran';

import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/Admin.module.scss';

const HasilPendaftaran = () => {
  const [data, setData] = useState([]);
  const [totalAvailableData, setTotalAvailableData] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getHasilPendaftaran = useCallback(async () => {
    setIsLoading(true);
    const { data } = await getHasilPendaftaranAPI({ showAll });
    if (data.success) {
      setData(data?.data?.listPendaftaran || []);
      setTotalAvailableData(data?.data?.totalData || 0);
    }
    setIsLoading(false);
  }, [showAll]);

  useEffect(() => {
    getHasilPendaftaran();
  }, [getHasilPendaftaran]);

  return (
    <div>
      <Head>
        <title>Hasil Pendaftaran Santri | Pondok Pesantren Al Hadi</title>
        <meta
          name="description"
          content="Hasil Pendaftaran Santri Pondok Pesantren Al Hadi Sungkai Langka"
        />
        <link rel="icon" href="/favicon.ico" />{' '}
      </Head>
      <PageLayout withSecondFooter>
        <div className={styles.hasilPendaftaranContainer}>
          <h2 className={styles.hasilPendaftaranTitle}>Hasil Pendaftaran Santri Baru</h2>
          <div className={styles.tableContainer}>
            {data.length < totalAvailableData && (
              <span role="button" className={styles.viewButton} onClick={() => setShowAll(true)}>
                Lihat Semua
              </span>
            )}
            {isLoading ? (
              <LoadingSpinner size={48} color={COLORS.Primary} />
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Jenis Kelamin</th>
                    <th>NISN</th>
                    <th>NIS</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{d.name}</td>
                      <td>{d.gender}</td>
                      <td>{d.nisn}</td>
                      <td>{d.nis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <span role="button" className={styles.downloadButton} onClick={() => setShowAll(true)}>
              Download
            </span>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default HasilPendaftaran;
