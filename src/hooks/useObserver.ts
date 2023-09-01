import React, { useEffect, useRef } from 'react';
import { STATUS } from '../constants';

type status = keyof typeof STATUS;
type IObserverCallback = () => void;

export default function useObserver(callback: IObserverCallback, status: status) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && status === STATUS.SUCCESS) {
        callback();
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [callback, containerRef]);

  return containerRef;
}
