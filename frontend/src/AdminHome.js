import React from 'react'
import Header from './Admin/Header'
import Template from './Admin/Template'
import MainBody from './Admin/MainBody'


const AdminHome =()=> {
  return (
    <div className='vh-100'>
      <Header />
      <Template />
      <MainBody />
    </div> 
  )
}

export default AdminHome