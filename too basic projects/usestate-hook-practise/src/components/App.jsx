import React, { useState } from "react";
function App() {
  let [count, setCount] = useState(0);
  function increament() {
    setCount(++count);
  }
  function decreament() {
    setCount(--count);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increament}>+</button>
      <button onClick={decreament}>-</button>
    </div>
  );
}

export default App;
