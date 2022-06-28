import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [userName, setuserName] = useState("");
  const [userAge, setuserAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if(userName.trim().length===0 || userAge.trim().length===0){
        return;
    }
    if(+userAge<1){
        return;
    }
   
    props.onAddUser(userName,userAge);
    setuserName("");
    setuserAge("");
  };
  const setUsernameValue = (event) => {
    setuserName(event.target.value);
  };
  const setUserageValue = (event) => {
    setuserAge(event.target.value);
  };

  return (
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
   
  );
};

export default AddUser;
