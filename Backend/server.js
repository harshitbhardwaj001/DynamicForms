// Importing Express, MySQL, Cors
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


// Initializing Express
const app = express();

// Use Cors
app.use(cors());
app.use(express.json())

// Creating DB connection 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "register"
})

// API for Registration
app.post('/register', (req, res) => {
    const sql = "INSERT INTO login (`name`, `username`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.username,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/forms', (req, res) => {
    const sql = "INSERT INTO form (`doc_name`, `doc_desc`, `questions`, `end_date`) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.doc_name,
        req.body.doc_desc,
        JSON.stringify(req.body.questions) ,// Assuming questions is an array of objects
        req.body.end_date,
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
});

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-${month}-${day}`;

app.get('/active', (req, res) => {
    const sql = "SELECT * FROM form WHERE `end_date` > ?";
    db.query(sql, currentDate, (err,data) => {
        if (err) {
            return res.json(err);
        }
        res.send(data);
    })
})

app.get('/inactive', (req, res) => {
    const sql = "SELECT * FROM form WHERE `end_date` < ?";
    db.query(sql, currentDate, (err,data) => {
        if (err) {
            return res.json(err);
        }
        res.send(data);
    })
})


app.get('/userForms', (req, res) => {
    const sql = "SELECT * FROM form";
    db.query(sql, (err,data) => {
        if (err) {
            return res.json(err);
        }
        res.send(data);
    })
})

app.get('/userResponse/:f_id', (req, res) => {
    var f_id = req.params.f_id;
    const sql = "SELECT * FROM responses WHERE `f_id` = ?";
    db.query(sql, [f_id], (err,data) => {
        if (err) {
            return res.json(err);
        }
        res.send(data);
    })
})

app.get('/userResponse/:f_id/:lab_id', (req, res) => {
    var f_id = req.params.f_id;
    var lab_id = req.params.lab_id;
    const sql = "SELECT * FROM responses WHERE `f_id` = ? AND `lab_id` = ?";
    db.query(sql, [f_id, lab_id], (err,data) => {
        if (err) {
            return res.json(err);
        }
        res.send(data[0]);
    })
})

app.post('/userResponse/:f_id/:lab_id', (req, res) => {
    var f_id = req.params.f_id;
    var lab_id = req.params.lab_id;
    var responses = JSON.stringify(req.body.response)
    const sql = "UPDATE responses SET responses = ? WHERE `f_id` = ? AND `lab_id` = ?";
    db.query(sql, [responses, f_id, lab_id], (err,data) => {
        if (err) {
            return res.json(err);
        }
        res.send("Success");
    })
})

app.get('/formdata/:f_id', (req, res) => {
    var f_id = req.params.f_id;
    const sql = "SELECT * FROM form WHERE `f_id` = ?";

    db.query(sql, [f_id], (err, data) => {
        if (err) {
            console.error("Error executing query: ", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (data.length === 0) {
            return res.status(404).json({ error: "Form not found" });
        }

        res.status(200).json(data[0]);
    });
});

app.get('/questions/:f_id', (req, res) => {
    const f_id = req.params.f_id;
    const sql = "SELECT `questions` FROM form WHERE `f_id` = ?";

    db.query(sql, [f_id], (err, data) => {
        if (err) {
            console.error("Error executing query: ", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (data.length === 0) {
            return res.status(404).json({ error: "Form not found" });
        }

        try {
            const questionsString = data[0].questions;

            console.log("Original JSON String:", questionsString);

            // Attempt to parse JSON
            const parsedJsonOnce = JSON.parse(questionsString);

            console.log("First Parsed JSON:", parsedJsonOnce);

            res.status(200).json(parsedJsonOnce);
            
        } catch (error) {
            console.error("Unexpected error:", error);
            return res.status(500).json({ error: "Unexpected error" });
        }
    });
});

app.get('/responsedata/:r_id', (req, res) => {
    var r_id = req.params.r_id;
    const sql = "SELECT * FROM responses WHERE `r_id` = ?";

    db.query(sql, [r_id], (err, data) => {
        if (err) {
            console.error("Error executing query: ", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (data.length === 0) {
            return res.status(404).json({ error: "Form not found" });
        }

        res.status(200).json(data[0]);
    });
});

app.post('/response/:f_id', (req, res) => {
    const sql = "INSERT INTO responses (`f_id`, `lab_id`, `responses`) VALUES (?, ?, ?)";
    const values = [
        req.params.f_id,
        req.body.lab_id,
        JSON.stringify(req.body.response),
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    });
})

// API for Login
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `username` = ? AND `password` = ?";
    
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            if(data[0].username === "Admin"){
                console.log("Success-Admin");
                res.json("Success-Admin");
            }
            else{
                console.log("Success-User")
                console.log(data[0])
                res.json(["Success-User", data[0].name]);
            }
        }else{
            res.json("Failed");
        }
    })
})

app.get('/labs', (req, res) => {
    const sql = "SELECT `name` FROM login WHERE lab_id > 2";
    
    db.query(sql, (err, data) => {
        if(err) {
            return res.json("Error");
        }
        res.json(data);
    })
})

app.post('/password', (req, res) => {
    const sql = "UPDATE login SET password = ? WHERE `name` = ?";
    
    db.query(sql, [req.body.password, req.body.name], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        else{
            res.json("Failed");
        }
    })
})

app.listen(8081, ()=> {
    console.log("listening")
}) 