import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import csirlogo from "./images/csirlogo_b.png"
import axios from 'axios';
// export let isAdmin;
// export let isUser;

function Login() {
    
    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput =(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if(errors.username === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success-Admin"){
                    window.localStorage.setItem("isAdmin", true);
                    window.localStorage.setItem("lab_id", "Admin");
                    navigate("/privateAdmin/adminhome");
                }
                else if(res.data[0] === "Success-User"){
                    window.localStorage.setItem("isUser", true);
                    window.localStorage.setItem("lab_id", res.data[1]);
                    navigate("/privateUser/userhome");
                }
                else{
                    alert("No record existed");
                }
            })
            .catch(err => console.log(err));
        }
    }

  return (
    <>
        {/* <div className='d-flex bg-primary position-absolute'>
            <img src={csirlogo} style={{height:"100px",width:"100px" }} class="img-fluid" alt="Responsive image" />
        </div> */}
      <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
              <div className='bg-dark text-light p-3 rounded w-25'>
                  <h2 className='text-center pb-3'><strong>Login</strong></h2>
                  <form action="" onSubmit={handleSubmit}>
                      <div className='mb-3'>
                          <label htmlFor="username"><strong>Username</strong></label>
                          <input type="text" placeholder="Enter Username" name='username'
                              onChange={handleInput} className='form-control rounded-0' />
                          {errors.username && <span className='text-danger'>{errors.username}</span>}
                      </div>
                      <div className='mb-3'>
                          <label htmlFor="password"><strong>Password</strong></label>
                          <input type="password" placeholder="Enter Password" name='password'
                              onChange={handleInput} className='form-control rounded-0' />
                          {errors.password && <span className='text-danger'>{errors.password}</span>}
                      </div>
                      <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
                      <p></p>
                      {/* <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Register</Link> */}
                  </form>
              </div>
          </div></>
  )
}

export default Login