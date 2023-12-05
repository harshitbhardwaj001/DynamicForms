import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Validation from '../LoginValidation';
import axios from 'axios';
import { FaEye } from 'react-icons/fa';
import Sidebar from '../components/SidebarU';

const ChangePass = () => {
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({})

    const handleInput =(event) => {
        setPassword(event.target.value)
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        const name = window.localStorage.getItem("lab_id");
        const err = Validation(password);
        setErrors(err);
        if(errors.password === ""){
            axios.post('http://localhost:8081/password',{ name, password})
            .then(
                alert("Password Changed!")
            )
            .catch(err => console.log(err));
        }
    }
  return (
    <Sidebar>
    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
              <div className='bg-dark text-light p-3 rounded w-25'>
                  <h2 className='text-center pb-3'><strong>Change Password</strong></h2>
                  <form action="" onSubmit={handleSubmit}>
                      <div className='mb-3'>
                          {/* <label htmlFor="newPass"><strong>New Password</strong></label> */}
                          <input type="password" placeholder="Enter New Password" name='newPass'
                              onChange={handleInput} className='form-control rounded-2' />
                               {/* <div className='d-flex justify-content-end mx-2'><h4><FaEye /></h4></div> */}
                          {errors.password && <span className='text-danger'>{errors.password}</span>}
                      </div>
                      {/* <div className='mb-3'>
                          <label htmlFor="password"><strong>Password</strong></label>
                          <input type="password" placeholder="Enter Password" name='password'
                              onChange={handleInput} className='form-control rounded-0' />
                          {errors.password && <span className='text-danger'>{errors.password}</span>}
                      </div> */}
                      <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Confirm</strong></button>
                      <p></p>
                      {/* <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Register</Link> */}
                  </form>
              </div>
          </div>
          </Sidebar>
  )
}

export default ChangePass