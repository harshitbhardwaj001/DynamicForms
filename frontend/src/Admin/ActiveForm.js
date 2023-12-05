import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function forms() {
  const [Inventory, setInventory] = useState([]);
  const navigate = useNavigate();
  // const[name, setName]=useState();
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${year}-${month}-${day}`;

  useEffect(() => {
    axios
      .get("http://localhost:8081/active")
      .then((res) => setInventory(res.data))

      // .then(res=> console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Sidebar>
    <div className="d-flex vh-100 bg-light flex-column justify-content-center align-items-center">
    <h1 className="mb-5">Active Forms</h1>
      <div className="d-flex w-75 bg-dark rounded p-3">
        {/* <Link to="/create" className='btn btn-success'>Add +</Link> */}
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last date to submit</th>
              <th>Check Responses</th>
            </tr>
          </thead>
          <tbody>
            {Inventory.map((data, i) => (
                
              <tr key={i}>
                <td>{data.doc_name}</td>
                <td>{(data.end_date).substr(0, 10)}</td>
                <td>
                  <button
                    className="btn btn-light"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default form submission
                      navigate(`/adminForm/+${data.f_id}`);
                      window.localStorage.setItem("DocName", data.doc_name)
                    }}
                  >
                    Check Responses
                  </button>
                </td>
                <td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Sidebar>
  );
}
export default forms;

// onClick={handleClick(data.f_id)}
