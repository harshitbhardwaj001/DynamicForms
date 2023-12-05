import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Header from '../User/Header';
import Sidebar from '../components/Sidebar';
// import './mainBody.css';



function Responses() {
    const [Inventory, setInventory]=useState([])
    // const[name, setName]=useState();


    useEffect(()=>{
        axios.get('http://localhost:8081/userForms')
        .then(res => setInventory(res.data))
        // .then(res=> console.log(res.data))
        .catch(err => console.log(err));
    },[])

    
    
  return (
    <Sidebar>
    <div className='d-flex vh-100 bg-light justify-content-center flex-column align-items-center'>
        <h1 className='mb-5'>All Responses</h1>
        <div className='d-flex w-50 vh-auto bg-dark rounded p-3'>
            {/* <Link to="/create" className='btn btn-success'>Add +</Link> */}
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Inventory.map((data, i)=>(
                            <tr>
                                <td>{data.doc_name}</td>
                                <td>{data.doc_desc}</td>
                                <td>
                                    <a href={'/adminForm/'+data.f_id}><button className='btn btn-primary'>Check Responses</button></a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    </Sidebar>
  )
}
export default Responses

// onClick={handleClick(data.f_id)}