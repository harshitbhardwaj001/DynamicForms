import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import csirlogo from "../images/csirlogo.png";
import axios from 'axios';
import "../App.css"

const Sidebar = ({children}) => {
    const [Inventory, setInventory]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/userForms')
        .then(res => setInventory(res.data))
        // .then(res=> console.log(res.data))
        .catch(err => console.log(err));
    },[])
    const handleClick = (e) => {
        
    }
  return (
    <div className='container1'>
        <div className="sidebar">
            <div className="top_section">
                <img src={csirlogo} style={{height:"50px",width:"50px", marginLeft:"-2px" }} className='csir logo' />
                <h1 style={{fontSize:"18px", marginLeft:"10px" }} >Data Collection Forms</h1>
            </div>
            <NavLink to={'/privateAdmin/adminhome'} className="link" activeclassName="active">
                <div className="link_text">Dashboard</div>
            </NavLink>
            <NavLink to={'/privateAdmin/changePassword'} className="link" activeclassName="active">
                <div className="link_text">Change Password</div>
            </NavLink>
            <NavLink to={'/privateAdmin/activeForms'} className="link" activeclassName="active">
                <div className="link_text">Active Forms</div>
            </NavLink>
            {
                Inventory.map((data, index) => (
                    <NavLink to={'/privateAdmin/responses/'+data.f_id} key={index} className="link" activeclassName="active" onClick={() => window.localStorage.setItem("DocName", data.doc_name)}>
                        <div className="link_text">{data.doc_name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar