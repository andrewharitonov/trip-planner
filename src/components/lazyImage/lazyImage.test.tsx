import React from 'react';
import {render} from '@testing-library/react';
import * as observerHook from 'hooks/useIntersectionObserver';
import {LazyImage} from './lazyImage';

const lazyImageProps = {
  minWidth: 100,
  minHeight: 200,
};

const spyOnIntersection = (isIntersecting: boolean) => {
  const elementOptions = {isIntersecting};
  jest.spyOn(observerHook, 'useIntersectionObserver').mockReturnValue(elementOptions as IntersectionObserverEntry);
};

describe('LazyImage', () => {
  it('should render a placeholder if element is not intersecting visible screen', () => {
    spyOnIntersection(false);
    const {getByTestId} = render(<LazyImage {...lazyImageProps} />);
    expect(getByTestId('lazy-image-placeholder')).toBeInTheDocument();
  });

  it('should render image with proper styles if element is intersecting screen', () => {
    spyOnIntersection(true);
    const {getByTestId} = render(<LazyImage {...lazyImageProps} />);
    expect(getByTestId('lazy-image')).toHaveStyle('min-width: 100px; min-height: 200px;');
  });
});
