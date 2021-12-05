import {DESKTOP_IMAGES_ASPECT_RATIO, MOBILE_IMAGES_ASPECT_RATIO} from 'constants/globals';

export const MOBILE_IMAGE_SIZE = {w: '102', h: '136'};
export const DESKTOP_IMAGE_SIZE = {w: '600', h: '400'};

export const getImageQueryParams = (isMobile: boolean) => {
  const imageOptions = isMobile
    ? {
        ar: MOBILE_IMAGES_ASPECT_RATIO,
        ...MOBILE_IMAGE_SIZE,
      }
    : {
        ar: DESKTOP_IMAGES_ASPECT_RATIO,
        ...DESKTOP_IMAGE_SIZE,
      };

  // Old browsers do not support URLSearchParams. Add polyfill if needed
  return new URLSearchParams(imageOptions).toString();
};

export const getLazyImageProps = (isMobile: boolean) => {
  if (isMobile) {
    return {width: `${MOBILE_IMAGE_SIZE.w}px`, height: `${MOBILE_IMAGE_SIZE.h}px`};
  }
  return {width: '100%', height: '20vw'};
};
