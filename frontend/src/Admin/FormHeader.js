import React from 'react'
import './FormHeader.css'
import form_image from "../images/google-forms-new-logo-1.png"; 
import {FiSettings} from "react-icons/fi"
import { FiStar } from "react-icons/fi";
import {AiOutlineEye} from 'react-icons/ai'
import { IconButton } from '@mui/material'
import avatarimage from "../images/2.png"
import {IoMdFolderOpen} from "react-icons/io"
import ColorLensIcon from '@mui/icons-material/ColorLens'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';




function FormHeader() {
  const navigate = useNavigate();
  const [{doc_name}, dispatch] = useStateValue();

  function navigates(){
    navigate("/response");
  }
  
  function handleClick() {
    window.localStorage.setItem("isPublish", true);
  }

  return (
    <div className='form_header'>
        <div className='form_header_left'>
            <img src={form_image} style={{height:"45px", width:"40px"}} />
            <input type="text" placeholder='Untitled Form' className='form_name' value={doc_name}></input>
            <IoMdFolderOpen className='form_header_icon' style={{marginRight:"10px"}}></IoMdFolderOpen>
            <FiStar className="form_header_icon" style={{marginRight:"10px"}}/>
            <span style={{fontSize:"12px",fontWeight:"650"}}>All changes saved in Dashboard</span>
        </div>
        <div className='form_header_right'>
            <IconButton>
                <ColorLensIcon size='small' className='form_header_icon'/>
            </IconButton>
            <IconButton onClick={navigates}>
                <AiOutlineEye className='form_header_icon'/>
            </IconButton>
            <IconButton>
                <FiSettings className='form_header_icon'/>
            </IconButton>
            <Button variant='contained' color='primary' href='#contained-buttons' onClick={handleClick}>Send</Button>
            <IconButton>
                <MoreVertIcon className='form_header_icon'/>
            </IconButton>
            <IconButton>
                <Avatar style={{height:"40px",width:"40px"}} src={avatarimage}/>
            </IconButton>
        </div>
    </div>
  )
}

export default FormHeader