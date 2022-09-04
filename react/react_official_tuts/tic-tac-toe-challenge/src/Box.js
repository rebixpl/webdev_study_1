import React from "react";
import "./index.css";

const Box = (props) => {
  return (
    <button onClick={props.onChecked} className="square">{props.value}</button>
  )
}

export default Box;
