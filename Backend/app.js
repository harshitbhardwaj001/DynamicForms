// Admin Side Backend - Form


// Importing essentials
const fs = require('fs');
const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

// Initializing Express
const app = express();

// Use Cors
app.use(cors());
// Use Body Parser
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// Post API for pushing data to DB as JSON
app.post(`/add_questions/:doc_id`, (req,res)=>{
    var docs_data = req.body;
    var name = req.params.doc_id;
    console.log(docs_data);
    let data = JSON.stringify(docs_data);
    fs.writeFileSync(`files/${name}.json`, data)
})

app.post(`/add_temp_questions/:doc_id`, (req,res)=>{
    var docs_data = req.body;
    var name = req.params.doc_id;
    console.log(docs_data);
    let data = JSON.stringify(docs_data);
    fs.writeFileSync(`files2/${name}.json`, data)
})
 

const readData = (docId, res) => {
    fs.readFile(`files2/${docId}.json`, (err, data) => {
        if (err) {
            // Handle the error, for example, by sending an error response
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file');
        } else {
            let ques_data = JSON.parse(data);
            console.log(docId);
            res.send(ques_data);
        }
    });
};

// Get API for retrieving data from DB
app.get("/data/:doc_id", (req, res) => {
    var docId = req.params.doc_id;
    
    // Define a function to handle the response
    const handleResponse = (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            // Retry reading the data
            readData(docId, res);
        } else {
            let ques_data = JSON.parse(data);
            console.log(docId);
            res.send(ques_data);
        }
    };

    fs.readFile(`files/${docId}.json`, (err, data) => {
        handleResponse(err, data);
    });
});


// Path Initialization
const path = require('path');

// Get API for fetching file names and maintaining in mainbody
app.get("/get_all_filenames", (req, res)=>{

    const directoryPath = path.join(__dirname, '/files');

    fs.readdir(directoryPath, function (err, files){
        if(err) {
            return console.log('Unable to scan directory: ' + err);
        }
        res.send(files);
    });
});


// Initializing port for node 
app.listen(9000, ()=> {
    console.log("express server is running at port 9000")
}) 