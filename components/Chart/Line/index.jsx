import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

import PropTypes from 'prop-types';

const Chart = dynamic(() => import('react-charts').then((mod) => mod.Chart), { ssr: false });

const LineChart = ({ data, xLabel, yLabel }) => {
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
        elementType: 'line',
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
      }}
    />
  );
};

LineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape()),
    }),
  ).isRequired,
  xLabel: PropTypes.string.isRequired,
  yLabel: PropTypes.string.isRequired,
};

export default LineChart;
