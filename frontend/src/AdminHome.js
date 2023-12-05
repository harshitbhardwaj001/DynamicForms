import React from 'react'
import Header from './Admin/Header'
import Template from './Admin/Template'
import MainBody from './Admin/MainBody'
import Sidebar from './components/Sidebar'


const AdminHome =()=> {
  return (
    <Sidebar>
    <div className='  '>
      <Header />
      <Template />
      <MainBody />
    </div> 
    </Sidebar>
  )
}

export default AdminHome