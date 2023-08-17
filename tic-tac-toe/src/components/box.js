import React from "react";

function BoxComponent(props) {
  return <button className="box" onClick={props.onClick}>{props.value}</button>;
}

export default BoxComponent;
