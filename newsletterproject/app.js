const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();
app.use(express.static("newsletterproject/public"));
app.use(bodyParser.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/signup.html"));
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
 