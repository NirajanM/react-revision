import React, { useState } from "react";

function App() {
  let currentTime = new Date().toLocaleTimeString();
  let [time, setTime] = useState(currentTime.slice(0, 7));

  let newTime = () => {
    currentTime = new Date().toLocaleTimeString();
    setTime(currentTime.slice(0, 7));
  };
  setInterval(newTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={newTime}>Get Time</button>
    </div>
  );
}

export default App;
