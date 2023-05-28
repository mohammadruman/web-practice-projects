const express = require("express");

const path = require("path");
const bodyParser = require('body-parser')
const app = express();
const port = 4000;

const router = require("./userroutes");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(router);
//Api get
app.get("/",(req,res)=>{
// res.json({
//     name:"ruman",
//     email:"sample@gmail.com",
//     password:"hexed"
// })
res.sendFile(path.join(__dirname+"/index.html"))
}) ;


//post api
// app.post("/api/v1/register",);

app.post("/api/v1/register",(req,res)=>{
    res.send("<h1>Done</h1")
   console.log("name");
   console.log(req.body);
})

app.listen(port,() =>{
    console.log(`server started on port ${port}`);
})