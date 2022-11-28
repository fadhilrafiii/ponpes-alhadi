import { useMemo } from 'react';

import { COLORS } from 'constants/colors';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

import styles from './Select.module.scss';

const Select = ({ isDisabled, defaultValue, name, label, required, options, value, onChange }) => {
  const colourStyles = useMemo(
    () => ({
      menu: (styles) => ({ ...styles, backgroundColor: COLORS.PrimaryLight }),
      dropdownIndicator: (styles) => ({ ...styles, color: COLORS.PrimaryDark }),
      control: (styles) => ({
        ...styles,
        backgroundColor: COLORS.PrimaryLight,
        border: 'none',
        boxShadow: 'none',
        borderRadius: 8,
      }),
      placeholder: () => ({ display: 'none' }),
      input: (styles) => ({ ...styles, fontSize: 16, paddingLeft: 16 }),
      noOptionsMessage: (styles) => ({ ...styles, fontSize: 16 }),
      singleValue: (styles) => ({
        ...styles,
        fontSize: 16,
        paddingLeft: 16,
      }),
      option: (styles, { isDisabled }) => {
        return {
          ...styles,
          color: '#000',
          cursor: 'pointer',
          fontSize: 16,
          backgroundColor: isDisabled ? COLORS.BlackGrey : COLORS.PrimaryLight,
          ':hover': {
            ...styles[':hover'],
            color: COLORS.White,
            backgroundColor: COLORS.Primary,
          },
          ':active': {
            ...styles[':active'],
            color: COLORS.White,
            backgroundColor: COLORS.Primary,
          },
        };
      },
    }),
    [],
  );

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.inputLabel}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <ReactSelect
        className={styles.select}
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        name={name}
        options={options}
        value={value}
        onChange={onChange}
        styles={colourStyles}
        noOptionsMessage={() => 'Tidak ada pilihan tersebut!'}
      />
    </div>
  );
};

Select.propTypes = {
  isDisabled: PropTypes.bool,
  defaultValue: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  value: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  onChange: PropTypes.func,
};

Select.defaultProps = {
  isDisabled: false,
  defaultValue: null,
  required: false,
  options: [],
  value: null,
  onChange: () => {},
};

export default Select;
