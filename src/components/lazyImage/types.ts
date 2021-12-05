import {CSSProperties, ImgHTMLAttributes} from 'react';

type OwnLazyImageProps = {
  minWidth: CSSProperties['minWidth'];
  minHeight: CSSProperties['minHeight'];
};

export type LazyImageProps = OwnLazyImageProps & ImgHTMLAttributes<HTMLImageElement>;
