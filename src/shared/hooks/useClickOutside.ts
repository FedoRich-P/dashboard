import { RefObject, useEffect } from 'react';

type Props = {
  ref: RefObject<HTMLElement | null>;
  callback: () => void;
};

export function useClickOutside({ ref, callback }: Props) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        callback();
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [ref, callback]);
}
