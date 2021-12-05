import React from 'react';
import styles from './styles.module.scss';
import {DateSeparatorProps} from './types';
import classNames from 'classnames';

const DateSeparator = ({disabled, className, ...htmlProps}: DateSeparatorProps) => {
  const separatorClassName = classNames(className, styles.dateSeparator, disabled && styles.disabled);
  return <div className={separatorClassName} {...htmlProps} />;
};

export default DateSeparator;
