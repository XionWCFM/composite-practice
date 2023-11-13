/* eslint-disable react-hooks/exhaustive-deps */
import React, { MutableRefObject } from 'react';

interface UseIntersectionObserver {
  root?: MutableRefObject<Element | null> | null;
  target: MutableRefObject<Element | null>;
  onIntersect: Function;
  offIntersect?: Function;
  threshold?: number;
  rootMargin?: string;
  enabled?: unknown;
}
const useIntersectionObserver = ({
  root = null,
  target,
  onIntersect,
  offIntersect = () => {},
  threshold = 0.5,
  rootMargin = '0px',
  enabled = true,
}: UseIntersectionObserver) => {
  React.useEffect(() => {
    if (!enabled) return;

    let observer: IntersectionObserver;
    const domElement = target && target.current;

    if (domElement) {
      observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              offIntersect();
            }

            if (entry.isIntersecting) {
              onIntersect();
            }
          }),
        {
          threshold,
          rootMargin,
          root: root && root.current,
        },
      );
      observer.observe(domElement);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [enabled, root, rootMargin, target, threshold]);
};

export default useIntersectionObserver;
