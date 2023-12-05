import React, { useEffect, useState } from "react";
import axios from "axios";
import "./mainBody.css";
import { useNavigate } from "react-router-dom";

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
    <div className="d-flex vh-auto bg-light flex-column justify-content-center align-items-center">
    <h1 className="mt-5 mb-5">Active Forms</h1>
      <div className="d-flex w-100 bg-dark rounded p-3">
        {/* <Link to="/create" className='btn btn-success'>Add +</Link> */}
        <table className="table m-3 table-dark">
          <thead>
            <tr>
              <th>Form Name</th>
              <th>Form Description</th>
              <th>Last date to submit</th>
              <th>Fill Form</th>
              <th>View Entry</th>
            </tr>
          </thead>
          <tbody>
            {Inventory.map((data, i) => (
              <tr key={i}>
                <td>{data.doc_name}</td>
                <td>{data.doc_desc}</td>
                <td>{(data.end_date).substr(0, 10)}</td>
                <td>
                  <button
                    className="btn btn-light"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default form submission
                      navigate(`/userForms/${data.f_id}`);
                    }}
                  >
                    {(!window.localStorage.getItem(`submitted${data.f_id}`) ? "Fill Form" : "Edit Form")}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-light"
                    disabled={
                      !window.localStorage.getItem(`submitted${data.f_id}`)
                    }
                    onClick={() => navigate(`/userForm/${data.f_id}/${window.localStorage.getItem("lab_id")}`)}
                  >
                    View Form Entry
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default forms;

// onClick={handleClick(data.f_id)}
