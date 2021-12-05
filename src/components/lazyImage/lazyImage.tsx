import React, {useRef} from 'react';
import {useIntersectionObserver} from 'hooks/useIntersectionObserver';
import {LazyImageProps} from './types';
import styles from './styles.module.scss';

const LAZY_IMAGE_OBSERVER_OPTIONS = {threshold: 0.5, rootMargin: '50px'};

export const LazyImage: React.FC<LazyImageProps> = ({minWidth, minHeight, children, ...htmlProps}) => {
  const lazyImageRef = useRef<HTMLDivElement>(null);
  const observableElement = useIntersectionObserver<HTMLDivElement>(lazyImageRef, LAZY_IMAGE_OBSERVER_OPTIONS);
  const style = {minWidth, minHeight};
  const renderPlaceholder = !observableElement?.isIntersecting;

  if (renderPlaceholder) {
    return <div ref={lazyImageRef} className={styles.placeholder} style={style} data-testid="lazy-image-placeholder" />;
  }

  return <img style={style} {...htmlProps} data-testid="lazy-image" />;
};
