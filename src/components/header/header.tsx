import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import {HeaderProps} from './types';

const Header: React.FC<HeaderProps> = ({children, className, ...htmlProps}) => {
  const headerClassName = classNames(className, styles.header);

  return (
    <header className={headerClassName} {...htmlProps}>
      <h1 className={styles.title}>{children}</h1>
    </header>
  );
};

export default Header;
