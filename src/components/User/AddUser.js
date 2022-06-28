import React from "react"
import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
const AddUser=(props)=>{ 
    const addUserHandler=event=>{
        event.preventDefault();

    }
    return(
        <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="name">  Name :</label>
             <input type="text" id="name"></input>
             
            <label htmlFor="age">  Age(Year) :</label>
             <input type="number" id="age"></input>

             <Button type="submit">Add User</Button>
        
            
        </form>
        </Card>
    )

}

export default AddUser;