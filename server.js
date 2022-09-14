const express = require("express");
const app = express();
const path = require("path");
// const notes = require('./routes/notes.js');
const fs = require("fs");




app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))

// app.use('/notes', notes);





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

const notes = [];

app.post("/api", (req, res, next) =>{
    fs.readFile("./db/db.json", "utf8", (err, data) =>{
        if(err){
            console.error(err);
        }
        else{
            const parsed = JSON.parse(data);
            parsed.push(req.body);

            fs.writeFile("./db/db.json", JSON.stringify(parsed, null, 4), (err) => err ? console.error(err) : console.log("success"));
            
        }
    })



    next();
})

app.delete("/api", (req, res, next) =>{
    next();
})

app.listen(3001, () =>{
    console.log(`http://localhost:${3001}`);
})