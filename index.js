require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express');
connectToMongo();
var cors = require('cors');
var app = express();
app.use(cors());
const port = process.env.PORT || 5000;
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
 

// const path = require("path");
// console.log("Path: " + path.resolve(__dirname, "../build"));
// if(process.env.NODE_ENV == 'production'){
    
//     app.get("/", (req, res)=>{
        
//         app.use(express.static(path.resolve(__dirname, "../build")));
//         res.sendFile(path.resolve(__dirname, "../build", "index.html"));
//     })
// }
// https://inotebook-21v1ocu73-shubhamgoyal7125.vercel.app/

app.listen(port, ()=>{
    console.log("Server is running at port 5000!");
})