import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import PropTypes from 'prop-types';
import Slider from 'react-slick';

import classes from './index.module.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const NextArrow = ({ onClick }) => {
  return (
    <span className={classes.nextArrow} onClick={onClick}>
      <ChevronRightIcon fontSize="large" />
    </span>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <span className={classes.prevArrow} onClick={onClick}>
      <ChevronLeftIcon fontSize="large" />
    </span>
  );
};

// Check for configurations at https://react-slick.neostack.com/docs/api
const Carousel = ({ className, config, children }) => {
  const baseConfig = {
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
