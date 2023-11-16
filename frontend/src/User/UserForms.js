import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function UserForms() {
  const [formData, setFormData] = useState(null);
  const [formName, setFormName] = useState(null);
  const { f_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/formdata/${f_id}`)
      .then((res) => {
        const questionsString = JSON.parse(res.data.questions);
        const questionsObject = JSON.parse(questionsString);
        setFormName(res.data.doc_name);
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

    axios
      .post(`http://localhost:8081/response/${f_id}`, postData)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    console.log("Form submitted");
  };

  return (
    <>
      <Header />
      <div className="d-flex flex-column vh-100 bg-primary p-5 text-white">
        <h1 className="text-dark">{formName}</h1>
        {formData ? (
          <form onSubmit={handleSubmit}>
            {formData.questions.map((question, index) => (
              <div
                key={index}
                className="d-flex justify-content-start mb-4 mt-4"
              >
                <label className="w-50 mb-2 fs-5">
                  {question.questionText} :
                </label>

                {question.questionType === "radio" ? (
                  <select
                    name={`question_${index}`}
                    onChange={handleInputChange}
                    className="px-3"
                  >
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
            <p className="fs-5">Remarks :</p>
            <textarea maxLength="100" type="text" className="w-100 h-50" name="Remarks" onChange={handleInputChange}/> <br />
            <br />
            <button type="submit" className="px-5 py-2">Submit</button>
          </form>
        ) : (
          <p>Loading form data...</p>
        )}
      </div>
    </>
  );
}

export default UserForms;
