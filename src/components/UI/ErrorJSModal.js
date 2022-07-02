import React from "react";
import ReactDOM  from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styless from "./ErrorJSModal.module.css";
const BackDrop = (props) => {
  return <div className={styless.backdrop} onClick={props.onConfirm} />;
};
const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorJSModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )};
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}></ModalOverlay>,document.getElementById('overlay-root'))};
    </React.Fragment>
  );
};
export default ErrorJSModal;
