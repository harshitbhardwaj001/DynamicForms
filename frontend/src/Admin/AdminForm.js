import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Header from '../User/Header';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
// import './mainBody.css';



function AdminForm() {
    const [Inventory, setInventory]=useState([])
    const { f_id } = useParams();
    // const[name, setName]=useState();


    useEffect(() => {
        axios.get(`http://localhost:8081/userResponse/${f_id}`)
            .then(res => {
                if (Array.isArray(res.data)) {
                    setInventory(res.data);
                } else {
                    console.error("Data is not an array:", res.data);
                }
            })
            .catch(err => console.log(err));
    }, [f_id]);

    
    
  return (
    <Sidebar>
    {/* <Header /> */}
    <div className='d-flex vh-100 bg-light justify-content-center flex-column align-items-center'>
        <h1 className='mb-5'>{window.localStorage.getItem("DocName")} Responses</h1>
        <div className='d-flex w-50 vh-auto bg-dark rounded p-3'>
            {/* <Link to="/create" className='btn btn-success'>Add +</Link> */}
            <table className='table table-dark w-100'>
                <thead>
                    <tr>
                        <th>Lab Name</th>
                        <th>Responses</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        Inventory.map((data, i)=>(
                            <tr key={data.lab_id}>
                                <td>{data.lab_id}</td>
                                <td>
                                    <a href={'/individualResponse/'+data.r_id}><button className='btn btn-light'>Response</button></a>
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
export default AdminForm

// onClick={handleClick(data.f_id)}