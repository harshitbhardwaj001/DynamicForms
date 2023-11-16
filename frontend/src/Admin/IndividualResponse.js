import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function IndividualResponse() {
  const [formData, setFormData] = useState(null);
  const [labName, setLabName] = useState(null);
  const { r_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/responsedata/${r_id}`)
      .then((res) => {
        const responseString = JSON.parse(res.data.responses);
        const responseObject = JSON.parse(responseString);
        console.log(responseObject); // Log the entire object
        setLabName(responseObject.lab_id);
        setFormData({ ...responseObject, response: responseObject });
        console.log(formData); // This may still log null due to the asynchronous nature
      })
      .catch((err) => console.log(err));
  }, [r_id]);

//   const questionArray = formData.questions.questionText;


  return (
    <>
      <Header />
      {/* {console.log(questionArray)}; */}
      <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='d-flex w-50 vh-auto bg-white rounded p-3'>
          {formData ? (
            <table className='table'>
              <thead>
                <tr>
                  <th>Question</th>
                  <th>Form ID</th>
                  <th>Response</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{}</td>
                  <td>{formData.f_id}</td>
                  <td>
                    <a href={`/individualResponse/${r_id}`}>
                      <button className='btn btn-primary'>Response</button>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p>Loading form data...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default IndividualResponse;
