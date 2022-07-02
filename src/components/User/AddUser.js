import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorJSModal from "../UI/ErrorJSModal";

const AddUser = (props) => {
  const Enteredname=useRef();
  const EnteredAge=useRef();

  
  const [errorMessage, setErrorMessage] = useState("");

  const addUserHandler = (event) => {
    const EnteredUserName=Enteredname.current.value;
    const EnteredUserAge=EnteredAge.current.value;
    
    event.preventDefault();
    if (EnteredUserName.trim().length === 0 || EnteredUserAge.trim().length === 0) {
      setErrorMessage({
        title: "Empty Values",
        message: "Blank values is not allowed ",
      });
      return;
    }
    if (+EnteredUserAge < 1) {
      setErrorMessage({
        title: "Age Exception",
        message: "Age must be greater than 0",
      });
      return;
    }

    props.onAddUser(EnteredUserName, EnteredUserAge);
    Enteredname.current.value="";
    EnteredAge.current.value="";
   
  };
  
  const onclickError = () => {
    setErrorMessage(null);
  };

  return (
    <div>
      {errorMessage && (
        <ErrorJSModal
          title={errorMessage.title}
          message={errorMessage.message}
          onConfirm={onclickError}
        ></ErrorJSModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name"> Name :</label>
          <input
            type="text"
            id="name"
           
            ref={Enteredname}
          ></input>

          <label htmlFor="age"> Age(Year) :</label>
          <input
            type="number"
            id="age"
          
            ref={EnteredAge}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
