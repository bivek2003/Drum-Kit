var audio = new Audio();
for (let i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        keypress(this.innerHTML);
        buttonAnimation(this.innerHTML);
    }
    );
}
document.addEventListener("keydown", function (event) {
    var buttonClick = event.key;
    keypress(buttonClick);
    buttonAnimation(buttonClick);
});
function keypress(buttonClick){
    var click2 = buttonClick.toUpperCase();
    switch (click2) {
        case "W":
            audio.src = "./sounds/crash.mp3";
            audio.play();
            break;
        case "A":
            audio.src = "./sounds/kick-bass.mp3";
            audio.play();
            break;
        case "S":
            audio.src = "./sounds/snare.mp3";
            audio.play();
            break;
        case "D":
            audio.src = "./sounds/tom-1.mp3";
            audio.play();
            break;
        case "J":
            audio.src = "./sounds/tom-2.mp3";
            audio.play();
            break;
        case "K":
            audio.src = "./sounds/tom-3.mp3";
            audio.play();
            break;
        case "L":
            audio.src = "./sounds/tom-4.mp3";
            audio.play();
            break;
        default:
            break;
    }
}
function buttonAnimation(buttonClick) {
    var activeButton = document.querySelector("."+buttonClick);
    activeButton.classList.add("pressed");
    setTimeout(function (){activeButton.classList.remove("pressed");},100);
    
}