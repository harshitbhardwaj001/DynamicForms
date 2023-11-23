import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

function Entry() {
    const [formData, setFormData] = useState({});
    const { f_id } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(
            `http://localhost:8081/userResponse/${f_id}/${window.localStorage.getItem("lab_id")}`
          );
          const responseString = JSON.parse(res.data.responses);
          const responseObject = JSON.parse(responseString);
  
          console.log(responseObject); // Log the entire object
  
          // Use a temporary variable to hold the updated state
          const updatedFormData = { ...responseObject, response: responseObject };
  
          console.log("Before updating formData:", formData);
          setFormData((prevState) => ({ ...prevState, ...updatedFormData }));
  
          // console.log(updatedFormData); // Log the updated state
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle the error, e.g., show an error message to the user
        }
      };
  
      fetchData(); // Invoke the async function
    }, [f_id]);
    console.log("After updating formData:", formData);
  
    // const questions = formData.questions.questionText
    const value = Object.values(formData);
    console.log(value)
  
    return (
      <>
        <Header />
        {/* {console.log(questionArray)}; */}
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
          <div className="d-flex w-50 vh-auto bg-white rounded p-3">
            {formData ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Response</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.questions &&
                    formData.questions.map((data, i) => (
                      <tr>
                        <td>{data.questionText}</td>
                        <td>
                          {formData[`question_${i}`]}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>Remark</td>
                      <td>{formData.Remarks}</td>
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

export default Entry