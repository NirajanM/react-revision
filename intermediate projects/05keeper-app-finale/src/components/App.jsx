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
  function handleDelete(id) {
    setNotes(() => {
      return notes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDel={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
