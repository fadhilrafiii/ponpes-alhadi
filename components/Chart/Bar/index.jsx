import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

import { COLORS } from 'constants/colors';
import PropTypes from 'prop-types';

import LoadingSpinner from 'components/base/LoadingSpinner';

import styles from '../Chart.module.scss';

const Chart = dynamic(() => import('react-charts').then((mod) => mod.Chart), {
  ssr: false,
  loading: () => (
    <div className={styles.loadingContainer}>
      <LoadingSpinner size={40} color={COLORS.PrimaryDark} />
    </div>
  ),
});

const BarChart = ({ data, xLabel, yLabel }) => {
  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => datum[xLabel],
    }),
    [xLabel],
  );

  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => datum[yLabel],
      },
    ],
    [yLabel],
  );

  return (
    <Chart
      options={{
        data,
        primaryAxis,
        secondaryAxes,
        tooltip: false,
      }}
    />
  );
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape()),
    }),
  ).isRequired,
  xLabel: PropTypes.string.isRequired,
  yLabel: PropTypes.string.isRequired,
};

export default BarChart;
