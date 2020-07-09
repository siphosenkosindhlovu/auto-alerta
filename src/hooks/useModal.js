import { useState } from 'react';

export default function useModal() {
  const [isShown, setIsShown] = useState(false);

  function hide() {
    setIsShown(false);
    console.log(isShown);
  }
  function show() {
    setIsShown(true);
    console.log(isShown);
  }
  function toggle() {
    setIsShown(!isShown);
  }

  return {
    isShown,
    hide,
    show,
    toggle,
  };
}
