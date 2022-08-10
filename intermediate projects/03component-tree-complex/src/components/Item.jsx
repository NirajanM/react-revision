import React, { useState } from "react";

function Item(props) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked((pv) => {
      return !pv;
    });
  }
  return (
    <li
      style={{ textDecoration: isClicked ? "line-through" : "none" }}
      onClick={handleClick}
    >
      {props.itemText}
    </li>
  );
}

export default Item;