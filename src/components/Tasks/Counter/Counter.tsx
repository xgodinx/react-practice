import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [countColor, setCountColor] = useState('');

  function increaseByOne() {
    setCount(count + 1);
    setCountColor('lightgreen');
    console.log(countColor);
  }

  function decreaseByOne() {
    setCount(count <= 0 ? 0 : count - 1);
    setCountColor('brown');
    console.log(countColor);
  }

  function resetCount() {
    setCount(0);
    setCountColor('white');
  }

  return (
    <div>
      <p style={{ color: countColor }} className="counter__value">
        Current value: {count}
      </p>
      <button onClick={increaseByOne}>Increment</button>
      <button onClick={decreaseByOne}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter;
