import React, { useState } from "react";
import "./MainBody.css";
import Form from "../images/form.png";
import StorageIcon from "@mui/icons-material/Storage";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AiFillDelete } from "react-icons/ai";
import { IconButton } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MainBody() {
  const navigate = useNavigate();

  function navigate_to(docname) {
    var fname = docname.split(".");
    navigate("/form/" + fname[0]);
  }

  async function handleClick(name, e) {
    // Prevent the event from propagating to the parent div
    e.stopPropagation();
    console.log(name);

    try {
      // Delete the file on the server
      await axios.delete(`http://localhost:9000/delete-file/${name}`);

      console.log("File Deleted");

      // Optionally, you can update the list of files after deletion
      filenames();
    } catch (error) {
      console.error("Error deleting file:", error.message, error.response);
    }
  }

  const [files, setFiles] = useState([]);

  async function filenames() {
    var request = await axios.get("http://localhost:9000/get_all_filenames");
    let filenames = request.data;
    setFiles(filenames);
  }
  filenames();

  return (
    <div className="mainbody">
      <div className="mainbody_top">
        <div
          className="mainbody_top_left"
          style={{ fontSize: "16px", fontWeight: "500" }}
        >
          Recent Form Templates
        </div>
        {/* <div className="mainbody_top_right">
          <div
            className="mainbody_top_center"
            style={{ fontSize: "14px", marginRight: "125px" }}
          >
            Access : Everyone
            <ArrowDropDownIcon />
          </div>
          <IconButton>
            <StorageIcon style={{ fontSize: "16px", color: "black" }} />
          </IconButton>
          <IconButton>
            <FolderOpenIcon style={{ fontSize: "16px", color: "black" }} />
          </IconButton>
        </div> */}
      </div>
      <div className="mainbody_docs">
        {files.map((ele) => (
          <div
            className="doc_card"
            onClick={() => {
              navigate_to(ele);
            }}
          >
            <img src={Form} className="doc_image" />
            <div className="doc_card_content">
              <h5 style={{ overflow: "ellipse" }}>
                {ele ? ele.split(".")[0] : "Untitled Document"}
              </h5>
              <i onClick={(e) => handleClick(ele.trim(), e)}>
                <AiFillDelete
                  style={{
                    fontSize: "16px",
                    color: "red",
                    marginLeft: "55px",
                    marginTop: "0px",
                  }}
                />
              </i>
              <div
                className="doc_content"
                style={{ fontSize: "12px", color: "grey" }}
              >
                {/* <div className='content_left'>
                <StorageIcon style={{color:"white",fontSize:"12px",backgroundColor:"6E2594",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/> Opened 6 Jan 2021
              </div> */}

                <div className="cont"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainBody;
