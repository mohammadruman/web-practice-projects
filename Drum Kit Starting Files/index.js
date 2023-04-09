//Detecting Button Press

var noOfButtons = document.querySelectorAll(".drum").length;
for(var i =0 ; i<noOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        // console.log(this.style.color="white");
       var buttoninenerHtml = this.innerHTML;
     makesound(buttoninenerHtml);
    });
}
//detecting key press
document.addEventListener("keypress",function(events){
   makesound(events.key);
});
function makesound(key){
    switch(key){
        case "l": 
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
            case "o":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;
                case "v":
                    var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
                case "e":
                        var audio = new Audio("sounds/tom-2.mp3");
                        audio.play();
                        break;
                 case "y":
                            var audio = new Audio("sounds/tom-4.mp3");
                            audio.play();
                            break;
                 case "o":
                            var audio = new Audio("sounds/crash.mp3");
                            audio.play();
                            break;
                case "u":
                            var audio = new Audio("sounds/kick-bass.mp3");
                             audio.play();
                            break;
                            default:
       }
}
