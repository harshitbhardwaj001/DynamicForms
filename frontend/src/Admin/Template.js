import React from 'react'
import './Template.css'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { IconButton } from '@mui/material'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore' 
import Blank from '../images/Blank.png'
import Serv from '../images/Server.jpg'
import Web from '../images/Web.jpg'
import {v4 as uuid} from 'uuid'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

// export let id_ = null;
function Template() {
  const navigate = useNavigate();
  const createForm = () => {
    var create_form_id = uuid();
    console.log(create_form_id);

    var questions_list = [{questionText: "Question", questionType:"radio", options:[{optionText:"Option 1"}], open: true, required: false}]

    axios.post(`http://localhost:9000/add_temp_questions/${create_form_id}`, {
        "document_name" : "Untitled Form",
        "doc_desc" : "Add Description",
        "questions" : questions_list
    })
    navigate("/form/"+create_form_id)
  }
  return (
    <div className='template_section'> 
        <div className='template_top'>
            <div className='left'>
                <span style={{fontSize:"16px", color:"#202124"}}>Start a new form</span>
            </div>
            {/* <div className='template_right'>
                <div className='gallery_button'>
                    Template Gallery
                    <UnfoldMoreIcon fontSize='small'/>
                    <IconButton>
                        <MoreVertIcon fontSize='small'/>
                    </IconButton>
                </div>
            </div> */}
        </div>
        <div className='template_body'>
            <div className='card_template'>
            <div className='card' onClick={createForm}>
                <img src={Blank} alt="no image" className='card_image'/>
            </div>
            <p className='card_title'>Add New Form</p>
            </div>
            {/* <div className='card_template'>
            <div className='card'>
                <img src={Serv} alt="no image" className='card_image'/>
            </div>
            <p className='card_title'>Server Form</p>
            </div>
            <div className='card_template'>
            <div className='card1'>
                <img src={Web} alt="no image" className='card_image'/>                
            </div>
            <p className='card_title1'>Compliant Website <br /> Form</p>
            </div> */}
        </div>
        <div className='responses'>
            <Link to="/responses"><button>Form Responses</button></Link>
        </div>
    </div>
  )
}

export default Template