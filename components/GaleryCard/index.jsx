import Link from 'next/link';

import PropTypes from 'prop-types';

import Img from 'components/base/Img';

import styles from './GaleryCard.module.scss';

const GaleryCard = ({ image, title, body, to }) => {
  return (
    <div className={styles.galeryCard}>
      <div className={styles.imageWrapper}>
        <Img layout="fill" src={image} alt={title} sizes="360px" usePlaceholder />
      </div>
      <div className={styles.galeryCardContent}>
        <h4>{title}</h4>
        <p>{body}</p>
        {to && (
          <div className={styles.readMore}>
            <Link href={to}>read more</Link>
          </div>
        )}
      </div>
    </div>
  );
};

GaleryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default GaleryCard;
