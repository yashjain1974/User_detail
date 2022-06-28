import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorJSModal from "../UI/ErrorJSModal";

const AddUser = (props) => {
  const [userName, setuserName] = useState("");
  const [userAge, setuserAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setErrorMessage({
        title: "Empty Values",
        message: "Blank values is not allowed ",
      });
      return;
    }
    if (+userAge < 1) {
      setErrorMessage({
        title: "Age Exception",
        message: "Age must be greater than 0",
      });
      return;
    }

    props.onAddUser(userName, userAge);
    setuserName("");
    setuserAge("");
  };
  const setUsernameValue = (event) => {
    setuserName(event.target.value);
  };
  const setUserageValue = (event) => {
    setuserAge(event.target.value);
  };

  const onclickError = (props) => {
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
            value={userName}
            onChange={setUsernameValue}
          ></input>

          <label htmlFor="age"> Age(Year) :</label>
          <input
            type="number"
            id="age"
            value={userAge}
            onChange={setUserageValue}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
