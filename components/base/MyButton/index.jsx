import PropTypes from 'prop-types';

import classes from './index.module.css';

const MyButton = ({ children, theme, fullWidth, ...props }) => {
  const classNames = [classes.button, classes[theme]];

  if (fullWidth) classNames.push(classes.fullWidth);

  return (
    <button className={classNames.join(' ')} {...props}>
      {children}
    </button>
  );
};

MyButton.propTypes = {
  theme: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
};

MyButton.defaultProps = {
  theme: 'primary',
  fullWidth: false,
};

export default MyButton;
