const express = require("express");
const notes = express.Router();



notes.get("/", (req, res, next) =>{
    console.log(req.body.name);
    next();
})


notes.post("/", (req, res, next) =>{
    console.log(`${req.method} request recieved`);
    const name = req.body
    console.log(name);
    next();
})



module.exports = notes;