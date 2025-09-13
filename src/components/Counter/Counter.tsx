import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0)

  return(
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter <= 0 ? 0 : counter - 1)}>-1</button> 
      <button onClick={() => setCounter(counter - counter)}>Reset</button>
    </div>
  )
}

export default Counter