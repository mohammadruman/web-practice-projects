const express = require("express");
const app = express();
app.get("/", function(request,response){
    response.send("hello");
});
app.get("/about",function(req,res){
res.send("Hey there i am mohammad ruman");
});

app.get("/contact",function(req,res){
    res.send("contact me gmail mohammad ruman");
    });
app.listen(3000,function(){
    console.log("server started on port 3000");
});