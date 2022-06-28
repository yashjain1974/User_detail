import React from "react";
import styless from "./Button.module.css";
const Button = (props) => {
  return (
    <div
      className={styless.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
export default Button;
