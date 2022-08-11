import React, { useState } from "react";

function Item(props) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked((pv) => {
      return !pv;
    });
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "space-between"
      }}
    >
      <li
        onClick={handleClick}
        style={{
          textDecoration: isClicked ? "line-through" : "none"
        }}
      >
        {props.itemText}
      </li>
      <button
        onClick={() => {
          props.deleteItem(props.id); //passing it inside function like this so that it won't get called on render
        }}
      >
        delete
      </button>
    </div>
  );
}

export default Item;
