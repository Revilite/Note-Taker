const express = require("express");
const api = express.Router();
const fs = require("fs")


api.get("/", (req, res, next) =>{
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
    
    api.post("/", (req, res, next) =>{
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
    
    api.delete("/", (req, res, next) =>{
        next();
    })
    



module.exports = api;