import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";
function App() {
  const [userList, setUserList] = useState([]);

  const onSetuserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onSetuserHandler}></AddUser>
      <UserList users={userList}></UserList>
    </div>
  );
}

export default App;
