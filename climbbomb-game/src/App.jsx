import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from './Components/Header/Header';
import { UserProvider } from './Context/UserContext';


function App() {

  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null)


  const login = (userName, password) => {
    const user = users.find(
      (user) => user.userName === userName && user.password === password
    );

    if (user) {
      setLoggedUser(user);
      return true;
    }

    return false;
  };


  const register = (username, password, email, fullname) => {
    setUsers(prev => ([...prev, { userName: username, password: password, email: email, fullName: fullname }]))
  }


  const logout = () => {

  }


  return (
    <>
      <UserProvider value={{ login, register, logout, users, loggedUser, setLoggedUser }}>
        <Header />
        <Outlet />
      </UserProvider>

    </>
  )
}

export default App