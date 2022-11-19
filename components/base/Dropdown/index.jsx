import { useState } from 'react';

import PropTypes from 'prop-types';

import classes from './index.module.scss';

const Dropdown = ({
  isOpenInitially,
  text,
  children,
  className,
  textClassName,
  containerClassName,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(isOpenInitially);

  const actionToggleDropdown = () => setIsOpen((prev) => !prev);

  const classNames = [classes.dropdown, className];

  if (isOpen) classNames.push(classes.dropdownOpen);

  return (
    <div className={classNames.join(' ')} {...props}>
      <div className={classes.dropdownMain}>
        <div item className={[classes.dropdownText, textClassName].join(' ')}>
          {text}
        </div>
        <div item className={classes.dropdownButton} role="button" onClick={actionToggleDropdown}>
          <span className={classes.arrowDropdown} />
        </div>
      </div>
      <div className={[classes.dropdownItemContainer, containerClassName].join(' ')}>
        {children}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  text: PropTypes.node.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
  textClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  isOpenInitially: PropTypes.bool,
};

Dropdown.defaultProps = {
  className: '',
  textClassName: '',
  containerClassName: '',
  isOpenInitially: false,
};

export default Dropdown;
