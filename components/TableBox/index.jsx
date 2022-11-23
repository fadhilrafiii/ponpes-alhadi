import PropTypes from 'prop-types';

import styles from './TableBox.module.scss';

const TableBox = ({ title, children }) => {
  return (
    <div className={styles.tableBox}>
      <div className={styles.tableBoxHeader}>
        <h4>{title}</h4>
      </div>
      <div className={styles.tableBoxBody}>{children}</div>
    </div>
  );
};

TableBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TableBox;
