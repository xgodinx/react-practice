import Button from '../Button/Button';
import { useState } from 'react';

function Toggle() {
  const [isActive, setIsActive] = useState(false);

  function toggleActive() {
    setIsActive((prev) => !prev);
    // setIsActive(!isActive);
  }
  return <Button onClick={toggleActive}>{isActive ? 'On' : 'Off'}</Button>;
}

export default Toggle;
