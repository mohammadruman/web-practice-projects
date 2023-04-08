
var randomno1 = Math.random() *6;
randomno1 = Math.floor(randomno1)+1;    //random no between 1 to 6
var randomimage = "dice" + randomno1 +".png";   // dice1.png ---- dice6.png

var randomimagesource = "images/" + randomimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);
var randomno2 = Math.random() *6;
randomno2 = Math.floor(randomno2)+1;    //random no between 1 to 6
var randomimage2 = "dice" + randomno2 +".png";   // dice1.png ---- dice6.png

var randomimagesource2 = "images/" + randomimage2;


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);


if(randomno1>randomno2){
    document.querySelector("h1").innerHTML="player 1 wins 🤴";
}
else if(randomno1===randomno2){
    document.querySelector("h1").innerHTML="Match Tied Refresh 😵";
}
else{
    document.querySelector("h1").innerHTML="player 2 wins 🤴";
}