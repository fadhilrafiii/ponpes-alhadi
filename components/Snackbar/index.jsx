import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectClientState } from 'shared/redux/slices/client-state-slice';
import { hideSnackbar, selectSnackbar } from 'shared/redux/slices/snackbar-slice';

import styles from './Snackbar.module.scss';

const Snackbar = () => {
  const dispatch = useDispatch();
  const { isOpen, message, type } = useSelector(selectSnackbar);
  const { isClientReady } = useSelector(selectClientState);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => dispatch(hideSnackbar()), 5000);
    }
  }, [dispatch, isOpen]);

  if (!isOpen || !isClientReady) return null;

  return (
    <div className={[styles.snackbar, styles[type]].join(' ')}>
      <div className={styles.message}>{message}</div>
      <span role="button" className={styles.close} onClick={() => dispatch(hideSnackbar())}>
        &times;
      </span>
    </div>
  );
};

export default Snackbar;
