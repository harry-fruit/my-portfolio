import { useState, useEffect, useRef, RefObject } from 'react';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const useSize = (ref?: RefObject<HTMLElement>): Size => {
  const [size, setSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      if (ref?.current) {
        // If a ref is provided, get the size of the referenced element
        setSize({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      } else {
        // If no ref is provided, get the window size
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    handleResize(); // Set size initially
    window.addEventListener('resize', handleResize); // Update size on window resize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return size;
};

export default useSize;
