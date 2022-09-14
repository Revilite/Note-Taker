const express = require("express");
const api = express.Router();
const fs = require("fs")


api.get("/notes", (req, res, next) =>{
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
    
    api.post("/notes", (req, res, next) =>{

        fs.readFile("./db/db.json", "utf8", (err, data) =>{
            if(err){
                console.error(err);
            }
            else{
                const parsed = JSON.parse(data);
                const {title, text} = req.body;
                const newNote = {
                    title, 
                    text, 
                    id: parsed.length + 1,
                }
                parsed.push(newNote);
    
                fs.writeFile("./db/db.json", JSON.stringify(parsed, null, 4), (err) => err ? console.error(err) : console.log("success"));
            }
        })
        next();
    })
    
    api.delete("/notes", (req, res, next) =>{
        fs.readFile("./db/db.json", "utf8", (err, data) =>{
            if(err){
                console.error(err);
            }
            else{
                const parsed = JSON.parse(data);

                for(note of notes){
                    
                }
            }
        })
        next();
    })
    



module.exports = api;