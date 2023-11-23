import React from 'react'
// import { isUser } from '../login'
import { Navigate, Outlet } from 'react-router-dom'


function privateUser() {
  const loggedIn = window.localStorage.getItem("isUser");
  console.log(loggedIn, "login");
  return loggedIn ? <Outlet /> : <Navigate to={"/"} />
}

export default privateUser