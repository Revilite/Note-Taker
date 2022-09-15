const express = require("express");
const path = require("path")
const app = express();
const api = require('./routes/api.js');
const fs = require("fs")



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))


app.use('/api', api);



app.get("/notes", (req, res, next) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.listen(3001, () =>{
    console.log(`http://localhost:${3001}/index`);
})