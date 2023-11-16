import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './RegisterValidation'
import axios from 'axios'

function register() {
    const [values, setValues] = useState({
        name: '',
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
        if(errors.name === "" && errors.username === "" && errors.password === ""){
            axios.post('http://localhost:8081/register', values)
            .then(res => {
                navigate('/login')
            })
            .catch(err => console.log(err));
        }
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2 className='text-center pb-5'><strong>Register Lab</strong></h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="name"><strong>Lab Name</strong></label>
                    <input type="text" placeholder="Enter Lab Name" name='name'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="username"><strong>Username</strong></label>
                    <input type="text" placeholder="Enter Username" name='username'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.username && <span className='text-danger'>{errors.username}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Register</strong></button>
                <p></p>
                <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default register