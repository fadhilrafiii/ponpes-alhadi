import PropTypes from 'prop-types';

import classes from './index.module.css';

const MyButton = ({ children, theme, className, fullWidth, ...props }) => {
  const classNames = [classes.button, className, classes[theme]];

  if (fullWidth) classNames.push(classes.fullWidth);

  return (
    <button className={classNames.join(' ')} {...props}>
      {children}
    </button>
  );
};

MyButton.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
};

MyButton.defaultProps = {
  className: '',
  theme: 'primary',
  fullWidth: false,
};

export default MyButton;
