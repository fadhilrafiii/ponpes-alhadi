import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';

import { COLORS } from 'constants/colors';
import { monthOptions, yearOptions } from 'constants/general';

import LoadingSpinner from 'components/base/LoadingSpinner';
import BarChart from 'components/Chart/Bar';
import Select from 'components/Select';

import { getPengunjung, getPengunjungSummary } from 'client/pengunjung';

import withAuth from 'shared/hocs/withAuth';
import PageLayout from 'shared/layouts/PageLayout';
import dayjs from 'shared/utils/datetime';

import styles from 'styles/Admin.module.scss';

const currentDate = dayjs();

const Pengunjung = () => {
  const [summary, setSummary] = useState({
    byMonth: 0,
    byYear: 0,
    allTime: 0,
  });
  const [data, setData] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [filter, setFilter] = useState({
    year: dayjs().year(),
    month: '',
  });

  const getDataPengunjungSummary = useCallback(async () => {
    setIsLoadingData(true);
    const res = await getPengunjungSummary();

    if (res.success) setSummary(res.data);
    setIsLoadingData(false);
  }, []);

  const getDataPengunjung = useCallback(async () => {
    setIsLoadingData(true);
    const res = await getPengunjung(filter);

    if (res.success) setData(res.data);
    setIsLoadingData(false);
  }, [filter]);

  const handleChangeFilter = (name, value) => {
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    getDataPengunjung();
  }, [getDataPengunjung]);

  useEffect(() => {
    getDataPengunjungSummary();
  }, [getDataPengunjungSummary]);

  return (
    <div>
      <Head>
        <title>Pengunjung | Pondok Pesantren Al Hadi Sungkai Langka</title>
        <meta
          name="description"
          content="Data pengunjung website Pondok Pesantren Al Hadi Sungkai Langka"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout withSecondFooter>
        <div className={styles.pengunjungContainer}>
          <h2 className={styles.pengunjungTitle}>Jumlah Pengunjung Website</h2>
          <div className={styles.pengunjungContent}>
            <div className={styles.pengunjungSummary}>
              <div className={styles.pengunjungSummaryCard}>
                <h1>{summary.allTime}</h1>
                <h4>Total Pengunjung</h4>
              </div>
              <div className={styles.pengunjungSummaryCard}>
                <h1>{summary.byYear}</h1>
                <h4>Total Pengunjung Tahun {currentDate.year()}</h4>
              </div>
              <div className={styles.pengunjungSummaryCard}>
                <h1>{summary.byMonth}</h1>
                <h4>
                  Total Pengunjung Bulan {monthOptions[currentDate.month()].label}{' '}
                  {currentDate.year()}
                </h4>
              </div>
            </div>
            <div className={styles.chartFilter}>
              <Select
                label="Tahun"
                value={filter.year.toString()}
                onChange={(val) => handleChangeFilter('year', val)}
                name="year"
                options={yearOptions}
              />
              <Select
                label="Bulan"
                value={filter.month}
                onChange={(val) => handleChangeFilter('month', val)}
                name="month"
                options={monthOptions}
              />
            </div>
            <div className={styles.chartWrapper}>
              <div>
                {isLoadingData ? (
                  <LoadingSpinner size={48} color={COLORS.PrimaryDark} />
                ) : data.length > 0 ? (
                  <BarChart
                    data={[
                      {
                        data,
                      },
                    ]}
                    xLabel="time"
                    yLabel="total"
                  />
                ) : (
                  <h3>Data tidak tersedia</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export const getServerSideProps = withAuth('Admin', () => {
  return { props: {} };
});

export default Pengunjung;
