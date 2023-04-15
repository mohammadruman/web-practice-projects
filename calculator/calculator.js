const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){
response.sendFile(__dirname + "/index.html");
});

app.post("/",function(request,response){
     console.log(request.body); 
    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);
    var result = num1+num2;


   response.send("thankyou for using the calculator The result is "+ result);
})


//bmi calculator
app.get("/bmicalculator",function(request,response){
    response.sendFile(__dirname + "/bmicalculator.html");
    });

    
app.post("/bmicalculator",function(request,response){
    console.log(request.body); 
   var weight = Number(request.body.weight);
   var height = Number(request.body.height);
   var result = (weight)/(height*height);


  response.send("Your Bmi is  "+ result);
})

app.listen(3000,function(){
    console.log("server is running on port 3000");
});
