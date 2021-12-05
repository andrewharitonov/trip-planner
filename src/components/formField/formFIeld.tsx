import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import {FormFieldProps} from './types';

const FormField: React.FC<FormFieldProps> = ({title, disabled, className, children, ...htmlProps}) => {
  const formFieldClassName = classNames(className, styles.formField, disabled && styles.disabled);

  return (
    <div className={formFieldClassName} {...htmlProps}>
      {title && <label className={styles.label}>{title}</label>}
      {children}
    </div>
  );
};

export default FormField;
