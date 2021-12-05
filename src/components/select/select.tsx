import React from 'react';
import styles from './styles.module.scss';
import {SelectProps} from './types';
import classNames from 'classnames';

const Select: React.FC<SelectProps> = ({options, placeholder, disabled, className, ...htmlProps}) => {
  const wrapperClassName = classNames(styles.wrapper, disabled && styles.disabled);
  const selectClassName = classNames(styles.select, className);

  return (
    <div className={wrapperClassName}>
      <select className={selectClassName} disabled={disabled} {...htmlProps}>
        {placeholder && (
          <option value={''} disabled>
            {placeholder}
          </option>
        )}
        {options.map(({name, value}) => (
          <option key={name} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
