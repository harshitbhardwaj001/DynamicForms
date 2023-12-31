import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import "./userForm.css"
import Sidebar from "../components/SidebarU";


function UserForms() {
  const [formData, setFormData] = useState(null);
  const [formDesc, setFormDesc] = useState(null);
  const { f_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/formdata/${f_id}`)
      .then((res) => {
        const questionsString = JSON.parse(res.data.questions);
        console.log(res);
        const questionsObject = JSON.parse(questionsString);
        setFormDesc(res.data.doc_desc);
        setFormData({ ...res.data, questions: questionsObject });
      })
      .catch((err) => console.log(err));
  }, [f_id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(window.localStorage.getItem("lab_id"));
    const jsonData = JSON.stringify(formData);
    const postData = {
      lab_id: window.localStorage.getItem("lab_id"),
      response: jsonData,
    };

    window.localStorage.getItem(`submitted${formData.f_id+ " " + window.localStorage.getItem("lab_id")}`) 
  ? axios
      .post(`http://localhost:8081/userResponse/${f_id}/${window.localStorage.getItem("lab_id")}`, postData)
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
  : axios
      .post(`http://localhost:8081/response/${f_id}`, postData)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    window.alert("Form submitted");
    window.localStorage.setItem(`submitted${formData.f_id+ " " + window.localStorage.getItem("lab_id")}`, true)
  };

  return (
    <div className="bg-light">
    <Sidebar>
      
      <Header />
      <div className="d-flex flex-column vh-1000 bg-light p-5 text-white">
        <h1 className="text-dark mb-3">{formDesc}</h1>
        <h6 className="text-dark mb-5">(*) - Required Fields</h6>
        {formData ? (
          <form onSubmit={handleSubmit}>
            {formData.questions.map((question, index) => (
              <div
                key={index}
                className="d-flex text-dark justify-content-start mb-4 mt-4"
              >
                <label className="w-50 mb-2 fs-5">
                  {question.questionText}
                  {question.required ? "*" : ""} :
                </label>

                {question.questionType === "radio" ? (
                  <select
                    name={`question_${index}`}
                    required={question.required}
                    onChange={handleInputChange}
                    className="px-3"
                    defaultValue=""
                  >
                    <option value="">
                      {" "}
                      -- select an option --{" "}
                    </option>
                    {question.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option.optionText}>
                        {option.optionText}
                      </option>
                    ))}
                  </select>
                ) : (
                  <>
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="d-flex flex-column">
                        <input
                          size="45"
                          type={question.questionType}
                          name={`question_${index}`}
                          onChange={handleInputChange}
                          className="px-3"
                          required={question.required}
                        />
                        <label htmlFor={`question_${index}_${optionIndex}`}>
                          {option.optionText}
                        </label>
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
            <p className="fs-5 text-dark">Remarks :</p>
            <textarea
              maxLength="100"
              type="text"
              className="w-100 h-50"
              name="Remarks"
              onChange={handleInputChange}
            />{" "}
            <br />
            <br />
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        ) : (
          <p>Loading form data...</p>
        )}
      </div>
    </Sidebar>
    </div>
  );
}

export default UserForms;
