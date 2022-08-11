import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function handleAdd(note) {
    console.log(note);
    setNotes((pv) => {
      return [...pv, note];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
