import styles from './LoadingPage.module.scss';

const LoadingPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loadingDotsWrapper}>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className={styles.loadingText}>Sedang Memuat Halaman</div>
    </div>
  );
};

export default LoadingPage;
