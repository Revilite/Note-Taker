const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({encoded : true}));
app.use(express.static("public"));


app.get("/index", (req, res) =>{
    res.sendFile(path.join(__dirname, "public/index.html"));
})


app.post("/notes", (req, res) =>{
    console.info(`${req.method} request recieved`);

    const {name, note} = req.body;

    if(name && note){
        const card = {
            name, 
            note
        }
        const response = {
            status: "success",
            body: card,
        }
    }

    console.log(response);
    
})

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}/index`);
})