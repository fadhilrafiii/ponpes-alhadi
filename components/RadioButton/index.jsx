import { useRef } from 'react';

import PropTypes from 'prop-types';

import styles from './Radio.module.scss';

const Radio = ({ value, onChange, label, name, required, options }) => {
  const containerRef = useRef(null);

  const handleFocusParent = (e) => {
    e.preventDefault();
    if (containerRef) containerRef.current.focus();
  };

  const handleChange = (e) => {
    if (containerRef) containerRef.current.blur();
    onChange(e);
  };

  return (
    <div tabIndex={0} className={styles.inputContainer} ref={containerRef}>
      {label && (
        <label className={styles.inputLabel}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      {options.map((opt, idx) => (
        <div key={opt.value} className={styles.optionWrapper}>
          <label className={styles.optionLabel} htmlFor={opt.value}>
            <input
              className={styles.input}
              id={opt.value}
              key={opt.label}
              type="radio"
              name={name}
              onChange={handleChange}
              value={opt.value}
              checked={opt.value.toLowerCase() === value?.toLowerCase()}
              required={required}
              onFocus={idx === 0 ? handleFocusParent : () => {}}
            />
            <span className={styles.checkMark} />
            {opt.label}
          </label>
        </div>
      ))}
    </div>
  );
};

Radio.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

Radio.defaultProps = {
  value: '',
  onChange: () => {},
  required: false,
  options: [],
};

export default Radio;
