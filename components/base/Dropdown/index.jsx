import { useState } from 'react';

import { Grid } from '@mui/material';

import PropTypes from 'prop-types';

import classes from './index.module.css';

const Dropdown = ({ text, children, className, textClassName, containerClassName, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const actionToggleDropdown = () => setIsOpen((prev) => !prev);

  const classNames = [classes.dropdown, className];

  if (isOpen) classNames.push(classes.dropdownOpen);

  return (
    <div className={classNames.join(' ')} {...props}>
      <Grid
        container
        className={classes.dropdownMain}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item className={[classes.dropdownText, textClassName].join(' ')}>
          {text}
        </Grid>
        <Grid item className={classes.dropdownButton} role="button" onClick={actionToggleDropdown}>
          <span className={classes.arrowDropdown} />
        </Grid>
      </Grid>
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
};

Dropdown.defaultProps = {
  className: '',
  textClassName: '',
  containerClassName: '',
};

export default Dropdown;
