const express = require("express");
const app = express();
const path = require("path");
const notes = require('./routes/notes.js');
const fs = require("fs");


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))

app.use('/notes.html', notes);





app.get("/api", (req, res, next) =>{
fs.readFile("./db/db.json", "utf8", (err, data) =>{
    if(err){
        console.error(err);
    }
    else{
        const parsed = JSON.parse(data);

        res.json(parsed);
    }
})
})

app.post("", (req, res, next) =>{
    
    next();
})

app.listen(3001, () =>{
    console.log(`http://localhost:${3001}`);
})