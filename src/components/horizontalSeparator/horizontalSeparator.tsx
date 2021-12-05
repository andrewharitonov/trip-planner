import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import {HorizontalSeparatorProps} from './types';

const HorizontalSeparator: React.FC<HorizontalSeparatorProps> = ({children, className, ...htmlProps}) => {
  const separatorClassName = classNames(className, styles.horizontalSeparator);

  return <hr className={separatorClassName} {...htmlProps} />;
};

export default HorizontalSeparator;
