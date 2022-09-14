const express = require("express");
const app = express();
const path = require("path");
const api = require('./routes/api.js');
const fs = require("fs");




app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"))

app.use('/api', api);






app.listen(3001, () =>{
    console.log(`http://localhost:${3001}/index.html`);
})