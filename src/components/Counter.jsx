import React, { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0)

  // функция увеличения
  function incrementor() {
    setCount(count + 1)
  }

  // функция уменьшения
  function decrementor() {
    setCount(count - 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementor}>Increment</button>
      <button onClick={decrementor}>Decrement</button>
    </div>
  )
}

export default Counter
