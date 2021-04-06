import React from "react";
import "./Button.css";

const button = (props) => {
  return (
    <button
      onClick={props.clicked}
      className={props.btntypes}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default button;
