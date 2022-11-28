import React from 'react';

import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = React.forwardRef(
  (
    { label, value, name, onChange, required, helperButtonText, onClickHelperButtonText, ...props },
    ref,
  ) => {
    return (
      <div className={styles.inputWrapper}>
        {label && (
          <label className={styles.inputLabel}>
            {label}
            {required && <span className={styles.required}>*</span>}{' '}
            {helperButtonText && onClickHelperButtonText && (
              <span role="button" onClick={onClickHelperButtonText} className={styles.helperButton}>
                {helperButtonText}
              </span>
            )}
          </label>
        )}
        <input
          ref={ref}
          className={styles.input}
          value={value}
          name={name}
          onChange={onChange}
          required={required}
          {...props}
        />
      </div>
    );
  },
);

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  helperButtonText: PropTypes.string,
  onClickHelperButtonText: PropTypes.func,
};

Input.defaultProps = {
  value: '-',
  onChange: () => {},
  required: false,
};

export default Input;
