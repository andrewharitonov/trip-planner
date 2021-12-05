import {RefObject, useEffect, useState} from 'react';

let observer: IntersectionObserver | null = null;
let intersectionCallbacks = new WeakMap();

const createObserverInstance = (options?: IntersectionObserverInit) => {
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = intersectionCallbacks.get(entry.target);
      if (entry.isIntersecting) {
        observer?.unobserve(entry.target);
        intersectionCallbacks.delete(entry.target);
        callback(entry);
      }
    });
  }, options);
};

export const useIntersectionObserver = <T extends HTMLElement>(
  ref: RefObject<T>,
  options: IntersectionObserverInit,
) => {
  const [intersectionEntry, setIntersectionEntry] = useState<IntersectionObserverEntry>();

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    if (!observer) {
      createObserverInstance(options);
    }

    intersectionCallbacks.set(element, setIntersectionEntry);
    observer?.observe(element);

    return () => {
      intersectionCallbacks.delete(element);
      observer?.unobserve(element);
    };
  }, [ref]);

  return intersectionEntry;
};
