import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';

import { COLORS } from 'constants/colors';

import LoadingSpinner from 'components/base/LoadingSpinner';

import { downloadHasilPendaftaranAPI, getHasilPendaftaranAPI } from 'client/pendaftaran';

import withAuth from 'shared/hocs/withAuth';
import PageLayout from 'shared/layouts/PageLayout';

import styles from 'styles/Admin.module.scss';

const HasilPendaftaran = () => {
  const [data, setData] = useState([]);
  const [totalAvailableData, setTotalAvailableData] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDownload, setIsLoadingDownload] = useState(false);

  const getHasilPendaftaran = useCallback(async () => {
    setIsLoading(true);
    const { data, success } = await getHasilPendaftaranAPI({ showAll });
    if (success) {
      setData(data?.listPendaftaran || []);
      setTotalAvailableData(data?.totalData || 0);
    }
    setIsLoading(false);
  }, [showAll]);

  const downloadHasilPendaftaran = useCallback(async () => {
    setIsLoadingDownload(true);
    await downloadHasilPendaftaranAPI();
    setIsLoadingDownload(false);
  }, []);

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
            <span
              role="button"
              className={isLoadingDownload ? styles.downloadButtonDisabled : styles.downloadButton}
              onClick={downloadHasilPendaftaran}
            >
              {isLoadingDownload ? <LoadingSpinner size={16} color={COLORS.White} /> : 'Download'}
            </span>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export const getServerSideProps = withAuth('Admin', () => {
  return { props: {} };
});

export default HasilPendaftaran;
