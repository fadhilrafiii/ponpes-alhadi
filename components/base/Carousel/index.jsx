import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Img from '../Img';

import classes from './index.module.scss';

import ChevronLeftIcon from 'public/icons/chevron-left.svg';
import ChevronRightIcon from 'public/icons/chevron-right.svg';

const NextArrow = ({ onClick }) => {
  return (
    <span className={classes.nextArrow} onClick={onClick}>
      <Img src={ChevronRightIcon} placeholder="empty" alt="right-arrow" width={32} height={32} />
    </span>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <span className={classes.prevArrow} onClick={onClick}>
      <Img src={ChevronLeftIcon} placeholder="empty" alt="left-arrow" width={32} height={32} />
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
    arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: children.length < 2 ? children.length : 2,
        },
      },
    ],
  };

  return (
    <div className={className}>
      <Slider
        {...baseConfig}
        {...config}
        slidesToShow={children.length < config.slidesToShow ? children.length : config.slidesToShow}
      >
        {children}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  className: PropTypes.string, // Filled with your carousel item class
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  config: PropTypes.shape({
    [PropTypes.string]: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  }),
};

export default Carousel;
