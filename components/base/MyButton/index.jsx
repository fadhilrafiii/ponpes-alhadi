import PropTypes from 'prop-types';

import classes from './index.module.scss';

const MyButton = ({ children, theme, buttonType, className, fullWidth, ...props }) => {
  const classNames = [classes.button, className, classes[theme], classes[buttonType]];

  if (fullWidth) classNames.push(classes.fullWidth);

  return (
    <button className={classNames.join(' ')} {...props}>
      {children}
    </button>
  );
};

MyButton.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'transparent']),
  buttonType: PropTypes.oneOf(['filled', 'outlined']),
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
};

MyButton.defaultProps = {
  className: '',
  buttonType: 'outlined',
  theme: 'primary',
  fullWidth: false,
};

export default MyButton;
