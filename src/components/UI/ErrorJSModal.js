import React from "react";
import Card from "./Card";
import Button from "./Button";
import styless from "./ErrorJSModal.module.css";
const ErrorJSModal = (props) => {
  return (
    <div>
      <div className={styless.backdrop} onClick={props.onConfirm} />
      <Card className={styless.modal}>
        <header className={styless.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styless.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styless.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorJSModal;
