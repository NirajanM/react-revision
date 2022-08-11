import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setNote((pv) => {
      return {
        ...pv,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          rows="3"
          value={note.content}
        />
        <button
          onClick={(e) => {
            props.onAdd(note);
            setNote({
              title: "",
              content: ""
            });
            e.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
