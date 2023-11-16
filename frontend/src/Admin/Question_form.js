import React from "react";
import { useState, useEffect } from "react";
import "./Question_form.css";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ShortTextIcon from "@mui/icons-material/ShortText";
import SubjectIcon from "@mui/icons-material/Subject";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BsTrash } from "react-icons/bs";
import {
  IconButton,
  Input,
  MenuItem,
  ToggleButton,
  Typography,
} from "@mui/material";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OnDemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { BsFileText } from "react-icons/bs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
// import {FcRightUp} from 'react-icons/fc'
import CloseIcon from "@mui/icons-material/Close";
import Radio from "@mui/material/Radio";
// import Date from '@mui/material/DateField'
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FormControlLabel from "@mui/material/FormControlLabel";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
// import { id_ } from './Template';
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useParams } from "react-router-dom";
// import MenuItem from '@mui/material/MenuItem'
import { publish } from "./FormHeader";

function Question_form() {
  //   const id_ = window.localStorage.getItem("id");
  const { id } = useParams();
  const [{}, dispatch] = useStateValue();
  const [textareaWidth, setTextareaWidth] = useState("");
  const [questions, setQuestions] = useState([
    {
      questionText: "Question",
      questionType: "radio",
      options: [{ optionText: "Option 1" }],
      open: true,
      required: false,
    },
  ]);

  const [documentName, setDocName] = useState("Untitled Document");
  const [documentDescription, setDocDesc] = useState("Add Description");
  const [endDate, setEndDate] = useState("");

  //   const[form, setForm] = useState({})

  useEffect(() => {
    async function data_adding() {
      var request = await axios.get(`http://localhost:9000/data/${id}`);
      var question_data = request.data.questions;
      console.log(question_data);
      var doc_name = request.data.document_name;
      var doc_descip = request.data.doc_desc;
      console.log(doc_name + " " + doc_descip);
      setDocName(doc_name);
      setDocDesc(doc_descip);
      setQuestions(question_data);
      dispatch({
        type: actionTypes.SET_DOC_NAME,
        doc_name: doc_name,
      });
      dispatch({
        type: actionTypes.SET_DOC_DESC,
        doc_desc: doc_descip,
      });
      dispatch({
        type: actionTypes.SET_QUESTIONS,
        questions: question_data,
      });
    }

    data_adding();
  }, []);

  function changeQuestion(text, i) {
    var newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
    console.log(newQuestion);
  }

  function date(e) {
    setEndDate(e.target.value);
    console.log(endDate);
  }

  function changeOptionValue(text, i, j) {
    var optionsQuestion = [...questions];
    optionsQuestion[i].options[j].optionText = text;
    setQuestions(optionsQuestion);
  }

  function addQuestionType(i, type) {
    let qs = [...questions];
    console.log(type);
    qs[i].questionType = type;
    setQuestions(qs);
  }

  function removeOption(i, j) {
    var RemoveOptionQuestion = [...questions];
    if (RemoveOptionQuestion[i].options.length > 1) {
      RemoveOptionQuestion[i].options.splice(j, 1);
      setQuestions(RemoveOptionQuestion);
    }
  }

  function addOption(i) {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length < 5) {
      optionsOfQuestion[i].options.push({
        optionText: "Option " + (optionsOfQuestion[i].options.length + 1),
      });
    } else {
      console.log("Max 5 options");
    }
    setQuestions(optionsOfQuestion);
  }

  function copyQuestion(i) {
    expandCloseAll();
    let qs = [...questions];
    var newQuestion = qs[i];

    setQuestions([...questions, newQuestion]);
  }

  function requiredQuestion(i) {
    var reqQuestion = [...questions];
    reqQuestion[i].required = !reqQuestion[i].required;
    setQuestions(reqQuestion);
  }

  function deleteQuestion(i) {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setQuestions(qs);
  }

  function addMoreQuestionField() {
    expandCloseAll();
    setQuestions([
      ...questions,
      {
        questionText: "Question",
        questionType: "radio",
        options: [{ optionText: "Option 1" }],
        open: true,
        required: false,
      },
    ]);
  }

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    var itemgg = [...questions];
    const itemF = reorder(
      itemgg,
      result.source.index,
      result.destination.index
    );
    setQuestions(itemF);
    // console.log(result);
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    console.log(result);
    return result;
  };

  function expandCloseAll() {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      qs[j].open = false;
    }
    setQuestions(qs);
  }

  function handleExpand(i) {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      if (i === j) {
        qs[j].open = true;
      } else {
        qs[j].open = false;
      }
      setQuestions(qs);
    }
  }

  function commitToSql() {
    const postData = {
      doc_name: documentName,
      doc_desc: documentDescription,
      questions: JSON.stringify(questions),
      end_date: endDate,
    };

    if (window.localStorage.getItem("isPublish")) {
      axios
        .post("http://localhost:8081/forms", postData)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
      window.localStorage.removeItem("isPublish");
    }
  }
  commitToSql();

  const handleTextareaWidthChange = (value, index) => {
    console.log(value); // Check if the function is called
    let updatedQuestions = [...questions];
    updatedQuestions[index].textareaWidth = value;
    setQuestions(updatedQuestions);
  };

  function commitToDB() {
    // dispatch({
    //     type: actionTypes.SET_QUESTIONS,
    //     questions:questions

    // })
    return axios.post(`http://localhost:9000/add_questions/${documentName}`, {
      document_name: documentName,
      doc_desc: documentDescription,
      questions: questions,
    });
  }

  function addQuestionType(i, type) {
    let qs = [...questions];
    console.log(type);
    qs[i].questionType = type;
    if (type === "TextArea") {
      // Set a default width for the textarea
      setTextareaWidth("300px");
    } else {
      setTextareaWidth("");
    }
    setQuestions(qs);
  }

  // function commitToDB(){
  //     axios.post(`http://localhost:9000/add_questions/${documentName}`, {
  //         "document_name" : documentName,
  //         "doc_desc" : documentDescription,
  //         "questions" : questions,
  //     })
  // }

  function questionsUI() {
    return questions.map((ques, i) => (
      <Draggable key={i} draggableId={i + "id"} index={i}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div>
              <div style={{ marginBottom: "0px" }}>
                <div style={{ width: "100%", marginBottom: "0px" }}>
                  <DragIndicatorIcon
                    style={{
                      transform: "rotate(-90deg)",
                      color: "#DAE0E2",
                      position: "relative",
                      left: "300px",
                    }}
                    fontSize="small"
                  />
                </div>
                <div>
                  <Accordion
                    expanded={questions[i].open}
                    onChange={() => {
                      handleExpand(i);
                    }}
                    className={questions[i].open ? "add_border" : ""}
                  >
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1A-header"
                      elevation={1}
                      style={{ width: "100%" }}
                    >
                      {!questions[i].open ? (
                        <div className="saved_questions">
                          <Typography
                            style={{
                              fontSize: "15px",
                              fontWeight: "400",
                              letterSpacing: ".1px",
                              lineHeight: "24px",
                              paddingBottom: "8px",
                            }}
                          >
                            {i + 1}. {questions[i].questionText}
                          </Typography>
                          {ques.options.map((op, j) => (
                            <div key={j}>
                              <div style={{ display: "flex" }}>
                                <FormControlLabel
                                  style={{
                                    marginLeft: "5px",
                                    marginBottom: "5px",
                                  }}
                                  disabled
                                  control={
                                    <input
                                      type={ques.questionType}
                                      color="primary"
                                      style={{ marginRight: "3px" }}
                                      required={ques.type}
                                    />
                                  }
                                  label={
                                    <Typography
                                      style={{
                                        fontFamily: "Roboto,Arial,sans-serif",
                                        fontSize: "13px",
                                        fontWeight: "400",
                                        letterSpacing: ".2px",
                                        lineHeight: "20px",
                                        color: "#202124",
                                      }}
                                    >
                                      {ques.options[j].optionText}
                                    </Typography>
                                  }
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                    </AccordionSummary>
                    {questions[i].open ? (
                      <div className="question_boxes">
                        <AccordionDetails className="add_question">
                          <div className="add_question_top">
                            <input
                              type="text"
                              className="question"
                              placeholder="Question"
                              value={ques.questionText}
                              onChange={(e) => {
                                changeQuestion(e.target.value, i);
                              }}
                            ></input>
                            {/* <CropOriginalIcon style={{color:"#5f6368"}} /> */}
                            <Select
                              className="select"
                              style={{ color: "#5f6368", fontSize: "13px" }}
                            >
                              <MenuItem
                                id="text"
                                value="Text"
                                onClick={() => {
                                  addQuestionType(i, "Text");
                                }}
                              >
                                <SubjectIcon style={{ marginRight: "10px" }} />
                                Paragraph
                              </MenuItem>
                              <MenuItem id="textarea" value="TextArea">
                                <SubjectIcon style={{ marginRight: "10px" }} />
                                Text Area
                              </MenuItem>
                              <MenuItem
                                id="checkbox"
                                value="Checkbox"
                                onClick={() => {
                                  addQuestionType(i, "checkbox");
                                }}
                              >
                                <CheckBoxIcon
                                  style={{
                                    marginRight: "10px",
                                    color: "#70757a",
                                  }}
                                  checked
                                />
                                Checkboxes
                              </MenuItem>

                              <MenuItem
                                id="date"
                                value="Date"
                                onClick={() => {
                                  addQuestionType(i, "date");
                                }}
                              >
                                <CalendarTodayIcon
                                  style={{
                                    marginRight: "10px",
                                    color: "#70757a",
                                  }}
                                />
                                Date
                              </MenuItem>
                              <MenuItem
                                id="dropdown"
                                value="DropDown"
                                onClick={() => {
                                  addQuestionType(i, "radio");
                                }}
                              >
                                <Radio
                                  style={{
                                    marginRight: "10px",
                                    color: "#70757a",
                                  }}
                                  checked
                                />
                                Drop Down
                              </MenuItem>
                            </Select>
                            {ques.questionType === "TextArea" && (
                              <>
                                <label htmlFor={`textareaWidth-${i}`}>
                                  Text Area Width
                                </label>
                                <input
                                  type="text"
                                  id={`textareaWidth-${i}`}
                                  value={ques.textareaWidth || ""}
                                  onChange={(e) =>
                                    handleTextareaWidthChange(e.target.value, i)
                                  }
                                  style={{
                                    marginLeft: "10px",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                  }}
                                />
                                <textarea
                                  style={{
                                    width: `${ques.textareaWidth || "100%"}`,
                                    resize: "vertical",
                                    marginLeft: "10px",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                  }}
                                  placeholder="Type your text here..."
                                ></textarea>
                              </>
                            )}
                          </div>
                          {ques.options.map((op, j) => (
                            <div className="add_question_body" key={j}>
                              {ques.questionType !== "text" ? (
                                <input
                                  type={ques.questionType}
                                  style={{ marginRight: "10px" }}
                                />
                              ) : (
                                <ShortTextIcon
                                  style={{ marginRight: "10px" }}
                                />
                              )}
                              <div>
                                <input
                                  type="text"
                                  className="text_input"
                                  placeholder="option"
                                  value={ques.options[j].optionText}
                                  onChange={(e) => {
                                    changeOptionValue(e.target.value, i, j);
                                  }}
                                ></input>
                              </div>

                              {/* <CropOriginalIcon style={{color:"#5f6368"}} /> */}

                              <IconButton aria-label="delete">
                                <CloseIcon
                                  onClick={() => {
                                    removeOption(i, j);
                                  }}
                                />
                              </IconButton>
                            </div>
                          ))}

                          {ques.options.length < 5 ? (
                            <div className="add_question_body">
                              <FormControlLabel
                                disabled
                                control={
                                  ques.questionType != "text" ? (
                                    <input
                                      type={ques.questionType}
                                      color="primary"
                                      inputProps={{
                                        "aria-label": "secondary checkbox",
                                      }}
                                      style={{
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                      }}
                                      disabled
                                    />
                                  ) : (
                                    <ShortTextIcon
                                    //   style={{ marginRight: "10px" }}
                                    />
                                  )
                                }
                                label={
                                  <div>
                                    <input
                                      type="text"
                                      className="text_input"
                                      style={{
                                        fontSize: "13px",
                                        width: "60px",
                                      }}
                                      placeholder="Add other"
                                    ></input>

                                    <Button
                                      onClick={() => {
                                        addOption(i);
                                      }}
                                      size="small"
                                      style={{
                                        textTransform: "none",
                                        color: "#4285f4",
                                        fontsize: "13px",
                                        fontweight: "600",
                                      }}
                                    >
                                      Add Option
                                    </Button>
                                  </div>
                                }
                              />
                            </div>
                          ) : (
                            ""
                          )}

                          <div className="add_footer">
                            {/* <div className='add_question_bottom_left'>
                            <Button size="small" style={{textTransform:'none',color:"#4285f4",fontSize:"13px",fontWeight:"600"}}><FcRightUp style={{border:"2px solid #4286f4", padding:"2px",marginRight:"8px"}}/>Answer Key</Button>
                        </div> */}
                            <div className="add_question_bottom">
                              <IconButton
                                aria-label="Copy"
                                onClick={() => {
                                  copyQuestion(i);
                                }}
                              >
                                <FilterNoneIcon />
                              </IconButton>
                              <IconButton
                                aria-label="delete"
                                onClick={() => {
                                  deleteQuestion(i);
                                }}
                              >
                                <BsTrash />
                              </IconButton>
                              <span
                                style={{ color: "5f6368", fontSize: "13px" }}
                              >
                                Required*
                              </span>
                              <Switch
                                name="checkedA"
                                color="primary"
                                onClick={() => {
                                  requiredQuestion(i);
                                }}
                                checked={ques.required}
                              ></Switch>
                              {/* <FormControlLabel control={<Switch defaultChecked />}/> */}
                              {/* <IconButton>
                                <MoreVertIcon />
                            </IconButton> */}
                            </div>
                          </div>
                        </AccordionDetails>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            addMoreQuestionField();
                          }}
                          style={{ fontSize: "14px", margin: "20px" }}
                        >
                          Add Field
                        </Button>
                        {/* <div className='question_edit'>
                    <AddCircleOutlineIcon fontSize='large' className='edit' onClick={()=>{addMoreQuestionField()}}/>
                    <OnDemandVideoIcon fontSize='large' className='edit'/>
                    <CropOriginalIcon fontSize='large' className='edit'/>
                    <TextFieldsIcon fontSize='large' className='edit'/>
                </div> */}
                      </div>
                    ) : (
                      ""
                    )}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    ));
  }

  return (
    <div className="question_form">
      <br></br>
      <div className="section">
        <div className="question_title_section">
          <div className="question_form_top">
            <input
              type="text"
              className="question_form_top_name"
              style={{ color: "black" }}
              placeholder="Untitled Document"
              value={documentName}
              onChange={(e) => {
                setDocName(e.target.value);
              }}
            />
            <input
              type="text"
              className="question_form_top_desc"
              style={{ color: "black" }}
              placeholder="Form Description"
              value={documentDescription}
              onChange={(e) => {
                setDocDesc(e.target.value);
              }}
            />
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {questionsUI()}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <p
            style={{ fontSize: "18px", marginTop: "14px", marginBottom: "2px" }}
          >
            Last Date to Fill Form
          </p>
          <input
            type="date"
            style={{ width: "170px" }}
            value={endDate}
            onChange={date}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={commitToDB}
            style={{ fontSize: "14px", marginTop: "24px" }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Question_form;
