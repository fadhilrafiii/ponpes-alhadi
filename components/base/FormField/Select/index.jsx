import { FormControl, MenuItem, Select as MuiSelect } from '@mui/material';

import PropTypes from 'prop-types';
import { useMemo } from 'react';

import { COLORS } from 'constants/colors';

import { baseFormControlStyles } from '../constants';
import { baseSelectStyles, menuProps } from './constants';

// Check rest props at https://mui.com/material-ui/api/select/
const Select = ({ sx, variant, options, error, helperText, placeholder, ...props }) => {
  const selectStyles = useMemo(() => ({ ...baseSelectStyles, ...sx }), [sx]);

  return (
    <FormControl fullWidth variant={variant} sx={baseFormControlStyles}>
      <MuiSelect {...props} displayEmpty MenuProps={menuProps} sx={selectStyles}>
        {placeholder && (
          <MenuItem disabled value="">
            <span styles={{ color: COLORS.Primary }}>{placeholder}</span>
          </MenuItem>
        )}
        {options.length > 0 ? (
          options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>No options available!</MenuItem>
        )}
      </MuiSelect>
      {helperText && (
        <div
          style={{
            marginTop: '4px',
            fontSize: '14px',
            color: error ? COLORS.Destructive : COLORS.Primary,
          }}
        >
          {helperText}
        </div>
      )}
    </FormControl>
  );
};

Select.propTypes = {
  sx: PropTypes.shape(),
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  sx: {},
  variant: 'standard',
  error: false,
  helperText: null,
};

export default Select;
