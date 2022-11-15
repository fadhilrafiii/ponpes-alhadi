import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Img from '../Img';

import classes from './index.module.scss';

const NextArrow = ({ onClick }) => {
  return (
    <span className={classes.nextArrow} onClick={onClick}>
      <Img src="/images/chevron-left.svg" placeholder="empty" width={24} height={24} />
    </span>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <span className={classes.prevArrow} onClick={onClick}>
      <Img src="/images/chevron-right.svg" placeholder="empty" width={24} height={24} />
    </span>
  );
};

// Check for configurations at https://react-slick.neostack.com/docs/api
const Carousel = ({ className, config, children }) => {
  const baseConfig = {
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnDotsHover: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={className}>
      <Slider {...baseConfig} {...config}>
        {children}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  className: PropTypes.string.isRequired, // Filled with your carousel item class
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  config: PropTypes.shape({
    [PropTypes.string]: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  }),
};

export default Carousel;
