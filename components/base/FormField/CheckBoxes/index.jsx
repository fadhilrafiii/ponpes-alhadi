import { Check } from '@mui/icons-material';
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';

import PropTypes from 'prop-types';

import classes from './index.module.css';

const UncheckedIcon = () => <span className={classes.uncheckedIcon} />;

const CheckedIcon = () => (
  <span className={classes.checkedIcon}>
    <Check fontSize="16" />
  </span>
);

const CheckBoxes = ({ options, values, isHorizontal, ...props }) => {
  if (options.length === 0) return null;

  const containerClasses = [classes.container];

  if (isHorizontal) containerClasses.push(classes.horizontal);

  return (
    <FormControl className={containerClasses.join(' ')}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          type="checkbox"
          value={option.value}
          checked={values.includes(option.value)}
          control={
            <MuiCheckbox
              checked={values.includes(option.value)}
              icon={<UncheckedIcon />}
              checkedIcon={<CheckedIcon />}
            />
          }
          label={option.label}
          {...props}
        />
      ))}
    </FormControl>
  );
};

CheckBoxes.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  isHorizontal: PropTypes.bool,
};

CheckBoxes.defaultProps = {
  values: [],
  isHorizontal: false,
};

export default CheckBoxes;
