import React, { useState } from "react";

function Item(props) {
  const [style, setStyle] = useState({ textDecoration: "none" });
  function handleClick() {
    setStyle({
      textDecoration: style.textDecoration === "none" ? "line-through" : "none"
    });
  }
  return (
    <li style={style} onClick={handleClick}>
      {props.itemText}
    </li>
  );
}

export default Item;
