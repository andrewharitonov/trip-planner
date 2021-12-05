import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import {FooterProps} from './types';

const Footer: React.FC<FooterProps> = ({children, className, ...htmlProps}) => {
  const footerClassName = classNames(className, styles.footer);

  return (
    <footer className={footerClassName} {...htmlProps}>
      {children}
    </footer>
  );
};

export default Footer;
