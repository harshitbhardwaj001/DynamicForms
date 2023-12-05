import React from 'react'
import Header from './User/Header'
import Body from './User/mainBody'
import Sidebar from './components/SidebarU'

function UserHome() {
  return (
    <div className='bg-light'>
    <Sidebar>
    <Header />
    <Body />
    </Sidebar>
    </div>
  )
}

export default UserHome