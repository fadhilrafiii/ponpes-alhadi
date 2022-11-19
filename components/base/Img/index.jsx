import Image from 'next/image';
import { forwardRef } from 'react';

import PropTypes from 'prop-types';

import classes from './index.module.css';

const Img = forwardRef(({ className, src, alt, sizes, layout, usePlaceholder, ...props }, ref) => {
  return (
    <div ref={ref} className={[classes.container, className].join(' ')}>
      <Image
        layout={layout}
        src={src}
        alt={alt}
        sizes={sizes}
        blurDataURL={usePlaceholder && '/images/placeholder.jpg'}
        objectFit="cover"
        objectPosition="center"
        {...props}
      />
    </div>
  );
});

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  alt: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  layout: PropTypes.string,
  usePlaceholder: PropTypes.bool,
};

Img.defaulProps = {
  className: '',
  layout: 'fill',
  usePlaceholder: false,
};

export default Img;
