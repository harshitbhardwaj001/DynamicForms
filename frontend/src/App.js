import React from 'react'
import Login from './login'
import Register from './register'
import AdminHome from './AdminHome'
import UserHome from './UserHome'
import PrivateAdmin from './components/privateAdmin'
import PrivateUser from './components/privateUser'
import Form from './Form'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserForms from './User/UserForms'
import Userform from './Admin/Userform'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/privateAdmin' element={<PrivateAdmin />}>
          <Route path='adminhome' element={<AdminHome />} />
        </Route>
        <Route path='/privateUser' element={<PrivateUser />}>
          <Route path='userhome' element={<UserHome />} />
        </Route>
        <Route path='/form/:id' element={<Form />} />
        <Route path='/response' element={<Userform />} />
        <Route path='/userForms/:f_id' element={<UserForms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App