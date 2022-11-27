import Link from 'next/link';

import PropTypes from 'prop-types';

import Img from 'components/base/Img';

import styles from './GaleriCard.module.scss';

const GaleriCard = ({ image, title, body, to }) => {
  return (
    <div className={styles.galeriCard}>
      <div className={styles.imageWrapper}>
        <Img
          layout="fill"
          src={image}
          alt={title}
          sizes="(max-width: 1200px) 40vw, 480px"
          placeholder="blur"
          priority
        />
      </div>
      <div className={styles.galeriCardContent}>
        <h4>{title}</h4>
        <p>{body}</p>
        {to && (
          <div className={styles.readMore}>
            <Link href={to}>selanjutnya...</Link>
          </div>
        )}
      </div>
    </div>
  );
};

GaleriCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default GaleriCard;
