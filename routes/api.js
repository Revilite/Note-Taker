const express = require("express");
const api = express.Router();
const fs = require("fs")


api.get("/notes", (req, res, next) =>{
    console.log("Get request called")
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

    api.delete("/notes/:id", (req, res, next) =>{
        const id = req.params.id;
        fs.readFile("./db/db.json", "utf8", (err, data) =>{
            if(err){
                console.error(err);
            }
            else{
                const parsed = JSON.parse(data);
                console.log(req.params)

                for(let note of parsed){
                    if(note.id == id){
                        parsed.splice(note, 1)
                    }
                }
                fs.writeFile("./db/db.json", JSON.stringify(parsed, null, 4), (err) => err ? console.error(err) : console.log("Success"));
            }
        })
        next();
    })
    



module.exports = api;