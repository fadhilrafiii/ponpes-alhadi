import Image from 'next/image';
import { forwardRef } from 'react';

import PropTypes from 'prop-types';

import classes from './index.module.css';

const Img = forwardRef(
  ({ className, src, alt, sizes, layout, usePlaceholder, priority, ...props }, ref) => {
    return (
      <div ref={ref} className={[classes.container, className].join(' ')}>
        <Image
          layout={layout}
          src={src}
          alt={alt}
          sizes={sizes}
          placeholder="blur"
          blurDataURL={usePlaceholder && '/images/placeholder.png'}
          objectFit="cover"
          objectPosition="center"
          priority={priority}
          {...props}
        />
      </div>
    );
  },
);

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  layout: PropTypes.string,
  priority: PropTypes.bool,
  usePlaceholder: PropTypes.bool,
};

Img.defaulProps = {
  className: '',
  layout: 'fill',
  priority: false,
  usePlaceholder: false,
};

export default Img;
