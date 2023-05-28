//jshint esversion:6
// const superheroes = require('superheroes');
// superheroes.all;

// superheroes.random();
// console.log(superheroes);

// var superheroes = require("superheroes");
// var mysupeheroes = superheroes.random();
// console.log(mysupeheroes);

// var marvel = require("marvel-characters")
 
// // random character
// console.log(marvel())
//=> 'Iron Man'
 
// all characters

//=> ["3-D Man", "A-Bomb", ..., "Zuras", "Zzzax"]



const http = require("http");
const fs =  require("fs");

const PORT = 2000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html","utf-8");

const server = http.createServer((req,res) => {
if(req.url==="/"){
    return res.end(home);
}
if(req.url ==="/about"){
    return res.end("<h1>About page </h1>");
}
else{
    return res.end("<h1> 404 error page not found </h1>");
}
}
);
server.listen(PORT,hostname,()=>{
    console.log('server is working on http ://${hostname}:${PORT})');
})
