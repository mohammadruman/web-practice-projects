const express = require("express");

const path = require("path");
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

const router = require("./userroutes");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(router);
//Api get
app.get("/",(req,res)=>{

res.sendFile(path.join(__dirname+"/index.html"))
}) ;
app.get("/admin.html",(req,res)=>{
    res.sendFile(path.join(__dirname+"/admin.html"))
    });

    app.get("/client.html",(req,res)=>{
        res.sendFile(path.join(__dirname+"/client.html"))
        });
        
app.post("/api/v2/login",(req,res)=>{
    res.sendFile(path.join(__dirname+"/thankyou.html"))
   console.log("name");
   console.log(req.body);
})

app.listen(port,() =>{
    console.log(`server started on port ${port}`);
})