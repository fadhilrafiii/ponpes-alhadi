import PropTypes from 'prop-types';

import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = ({ size, color }) => {
  return (
    <span
      className={styles.loader}
      style={{ width: size, height: size, borderWidth: size / 12, borderColor: color }}
    ></span>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

LoadingSpinner.defaultProps = {
  size: 24,
  color: '#fff',
};

export default LoadingSpinner;
