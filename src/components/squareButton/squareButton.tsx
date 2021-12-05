import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import {SquareButtonProps} from './types';

const SquareButton: React.FC<SquareButtonProps> = ({className, active, title, description, ...htmlProps}) => {
  const squareButtonClassName = classNames(className, styles.squareButton, active && styles.active);

  return (
    <button className={squareButtonClassName} {...htmlProps}>
      {description && <span className={styles.description}>{description}</span>}
      <span className={styles.title}>{title}</span>
    </button>
  );
};

export default SquareButton;
