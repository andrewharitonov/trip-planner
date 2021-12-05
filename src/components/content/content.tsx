import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import {ContentProps} from './types';

const Content: React.FC<ContentProps> = ({children, className, ...htmlProps}) => {
  const contentClassName = classNames(className, styles.content);

  return (
    <main className={contentClassName} {...htmlProps}>
      {children}
    </main>
  );
};

export default Content;
