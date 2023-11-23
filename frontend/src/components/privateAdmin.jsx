import React from 'react'
// import { isAdmin } from '../login'
import { Outlet, Navigate } from 'react-router-dom'


const privateAdmin = () => {
  const loggedIn = window.localStorage.getItem("isAdmin");
  console.log(loggedIn, "login");
  return loggedIn ? <Outlet /> : <Navigate to={"/"} />
}

export default privateAdmin