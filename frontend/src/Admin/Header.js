import React from 'react'
import "./Header.css"
import TemporaryDrawer from './TemporaryDrawer'
import { IconButton } from '@mui/material' 
import csirlogo from "../images/csirlogo.png"
import SearchIcon from '@mui/icons-material/Search'
import LogoutIcon from '@mui/icons-material/Logout';

export const signOut = () => {
    window.localStorage.removeItem("isAdmin");
    window.location.href = "/";
}


function Header() {
  return (
    <div className='header1'>
        <div className='header_info'>
            {/* <TemporaryDrawer /> */}
            {/* <img src={csirlogo} style={{height:"40px",width:"40px", marginLeft:"20px" }} className='csir logo' /> */}
            <div className='info'>
                <strong>Admin Dashboard</strong>
            </div>
            
        </div>
        
        <div className='logout' style={{ fontSize: 20}}>
            Logout
            <IconButton sx={{color:"black"}}  onClick={signOut} >
            <LogoutIcon sx={{ fontSize: 30,marginRight:"15px", marginLeft:"12px" }}/> 
            </IconButton>
        </div>
    </div>
  )
}

export default Header