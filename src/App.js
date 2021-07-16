import "./App.css";
import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  console.log(usersList)

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      return [...prevState, { name: uName, age: uAge, id : Date.now() }];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      {usersList.length? <UsersList users={usersList} /> : ""}
    </div>
  );
}

export default App;
