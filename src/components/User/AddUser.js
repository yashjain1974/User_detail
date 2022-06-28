import React from "react"
const AddUser=(props)=>{ 
    const addUserHandler=event=>{
        event.preventDefault();

    }
    return(
        <form onSubmit={addUserHandler}>
            <label htmlFor="name">  Name :</label>
             <input type="text" id="name"></input>
             
            <label htmlFor="age">  Age(Year) :</label>
             <input type="number" id="age"></input>

             <button type="submit">Add User</button>

            
        </form>
    )

}

export default AddUser;