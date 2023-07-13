var item = document.querySelectorAll(".set button");
// alert(item.length)
for (var i = 0; i < item.length; i++) {
  item[i].addEventListener("click", handleClick);
}

document.addEventListener("keydown", handleKeyboard);
// document.addEventListener("keydown", function() {playSound(event.key)});
// document.addEventListener("keydown", function() {console.log(event.key)});

function handleClick() {
  // alert("clicked!!!")
  // this.style.color = "white";
  playSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
  // this.style.color = "red";
}


function handleKeyboard() {
  playSound(event.key);
  buttonAnimation(event.key);
}

function playSound(select) {
  switch (select) {
    case "w":
      var audioLnk = "sounds/tom-1.mp3";
      var tom1 = new Audio(audioLnk);
      tom1.play();
      break;
    case "a":
      var audioLnk = "sounds/tom-2.mp3";
      var tom2 = new Audio(audioLnk);
      tom2.play();
      break;
    case "s":
      var audioLnk = "sounds/tom-3.mp3";
      var tom3 = new Audio(audioLnk);
      tom3.play();
      break;
    case "d":
      var audioLnk = "sounds/tom-4.mp3";
      var tom4 = new Audio(audioLnk);
      tom4.play();
      break;
    case "j":
      var audioLnk = "sounds/snare.mp3";
      var snare = new Audio(audioLnk);
      snare.play();
      break;
    case "k":
      var audioLnk = "sounds/crash.mp3";
      var crash = new Audio(audioLnk);
      crash.play();
      break;
    case "l":
      var audioLnk = "sounds/kick-bass.mp3";
      var kick = new Audio(audioLnk);
      kick.play();
      break;
    default:
  }
}

function buttonAnimation(buttonKey){
  var activeButton=document.querySelector("."+buttonKey);
  activeButton.classList.toggle("pressed");
setTimeout(function() {activeButton.classList.toggle("pressed")},100);
}
