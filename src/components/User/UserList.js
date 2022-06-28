import React from "react";
import Card from "../UI/Card";
import styless from './UserList.module.css';
const UserList=props=>{
    return(
        <Card className={styless.users}>
       
            <ul>
                {props.users.map(user=>(
                    <li key={user.id}>
                        {user.name} ({user.age} Year old)
                    </li>
                ))}
            </ul>
                
      
        </Card>

    )
}
export default UserList;