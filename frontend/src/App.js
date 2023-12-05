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
import Responses from './Admin/Responses'
import AdminForm from './Admin/AdminForm'
import IndividualResponse from './Admin/IndividualResponses'
import Entry from './User/Entry'
import ChangePass from './Admin/ChangePass'
import ActiveForm from './Admin/ActiveForm'
import ChangePassU from './User/ChangePass'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/privateAdmin' element={<PrivateAdmin />}>
          <Route path='adminhome' element={<AdminHome />} />
          <Route path='changePassword' element={<ChangePass />} />
          <Route path='activeForms' element={<ActiveForm />} />
        </Route>
        <Route path='/privateUser' element={<PrivateUser />}>
          <Route path='userhome' element={<UserHome />} />
          <Route path='changePassword' element={<ChangePassU />} />
        </Route>
        <Route path='/form/:id' element={<Form />} />
        <Route path='/response' element={<Userform />} />
        <Route path='/userForms/:f_id' element={<UserForms />} />
        <Route path='/responses' element={<Responses />} />
        <Route path='/adminForm/:f_id' element={<AdminForm />} />
        <Route path='/individualResponse/:r_id' element={<IndividualResponse />} />
        <Route path='/userForm/:f_id/:lab_id' element={<Entry />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App