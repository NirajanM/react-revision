import React, { useState } from "react";

function App() {
  let [textContent, setTextContent] = useState("Hello");
  let [isMouseOver, setMouseOver] = useState(false);
  function handleClick() {
    setTextContent("Submitted");
  }
  function styleBlack() {
    setMouseOver(true);
  }
  function removeStyleBlack() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{textContent}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={styleBlack}
        onMouseOut={removeStyleBlack}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
