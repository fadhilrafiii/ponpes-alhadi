import Image from 'next/image';
import { forwardRef } from 'react';

import PropTypes from 'prop-types';

import classes from './index.module.css';

const Img = forwardRef(({ className, src, alt, sizes, ...props }, ref) => {
  return (
    <div ref={ref} className={[classes.container, className].join(' ')}>
      <Image
        layout="fill"
        src={src}
        alt={alt}
        sizes={sizes}
        placeholder="blur"
        blurDataURL="/images/placeholder.png"
        objectFit="cover"
        objectPosition="center"
        {...props}
      />
    </div>
  );
});

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
};

Img.defaulProps = {
  className: '',
};

export default Img;
