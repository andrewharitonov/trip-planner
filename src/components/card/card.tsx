import React from 'react';
import classNames from 'classnames';
import styles from './style.module.scss';
import {CardProps} from './types';

const Card: React.FC<CardProps> = ({className, children, ...htmlProps}) => {
  const cardClassName = classNames(className, styles.card);

  return (
    <div className={cardClassName} {...htmlProps}>
      {children}
    </div>
  );
};

export default Card;
