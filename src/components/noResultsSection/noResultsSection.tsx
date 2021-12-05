import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import {NoResultsSectionProps} from './types';

const NoResultsSection: React.FC<NoResultsSectionProps> = ({className, children, ...htmlProps}) => {
  const noResultsSectionClassName = classNames(className, styles.noResults);

  return (
    <section className={noResultsSectionClassName} {...htmlProps}>
      {children}
    </section>
  );
};

export default NoResultsSection;
