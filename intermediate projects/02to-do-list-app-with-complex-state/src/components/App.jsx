import React, { useState } from "react";

function App() {
  let [text, setText] = useState("");
  let [toDoList, setToDoList] = useState([]);
  function handleChange(event) {
    const value = event.target.value;
    setText(value);
  }
  function handleClick() {
    setToDoList((pv) => {
      return [...pv, text];
    });
    setText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={text} type="text" />
        <button>
          <span onClick={handleClick}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((element) => {
            return <li>{element}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
