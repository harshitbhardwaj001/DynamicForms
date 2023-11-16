import React from 'react'
import "./Header.css"
import TemporaryDrawer from './TemporaryDrawer'
import { IconButton } from '@mui/material' 
import csirlogo from "../images/csirlogo.png"
import SearchIcon from '@mui/icons-material/Search'
import LogoutIcon from '@mui/icons-material/Logout';

export const signOut = () => {
    window.localStorage.removeItem("isAdmin");
    window.location.href = "/login";
}


function Header() {
  return (
    <div className='header'>
        <div className='header_info'>
            <TemporaryDrawer />
            <img src={csirlogo} style={{height:"40px",width:"40px" }} className='csir logo' />
            <div className='info'>
                <strong>Data Collection Forms</strong>
            </div>
            
        </div>
        
        <div className='header_search'>
            <IconButton>
                <SearchIcon sx={{ fontSize: 30 }}/> 
            </IconButton>
            <input type="text" name="search" placeholder='search' />
        </div>
        <div className='header_right'>

        </div>
        <div className='logout' style={{ fontSize: 20,marginRight:"20px" }}>
            Logout
            <IconButton sx={{color:"black"}}  onClick={signOut} >
            <LogoutIcon sx={{ fontSize: 30,marginRight:"15px", marginLeft:"12px" }}/> 
            </IconButton>
        </div>
    </div>
  )
}

export default Header