import PropTypes from 'prop-types';

import styles from './Radio.module.scss';

const Radio = ({ value, onChange, label, name, required, options }) => {
  return (
    <div className={styles.inputContainer}>
      {label && (
        <label className={styles.inputLabel}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      {options.map((opt) => (
        <div key={opt.value} className={styles.optionWrapper}>
          <label className={styles.optionLabel} htmlFor={opt.value}>
            <input
              className={styles.input}
              id={opt.value}
              key={opt.label}
              type="radio"
              name={name}
              onChange={onChange}
              value={opt.value}
              checked={opt.value === value}
              required={required}
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
