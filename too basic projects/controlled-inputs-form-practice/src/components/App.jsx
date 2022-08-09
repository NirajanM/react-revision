import React, { useState } from "react";

function App() {
  let [text, setText] = useState("");
  let [result, setResult] = useState("");
  let handleChange = (e) => {
    setText(e.target.value);
  };
  let handleSubmit = (e) => {
    setResult(text);
    e.preventDefault();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Hello {result}</h1>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
