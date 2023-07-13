// alert("Hello")
var buttonColours = ["red", "blue", "green", "yellow"];
var buttonSounds = ["sounds/red.mp3", "sounds/blue.mp3", "sounds/green.mp3", "sounds/yellow.mp3"];
var gamePattern = [];
var userClickedPattern = [];
var gameOn=false;
var level = 0;

function nextSequence() {
  if (gameOn===true) {level++;}

  $("#level-title").text("Level "+level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  console.log(gamePattern);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(200);

  var randomChosenSound = "sounds/" + randomChosenColour + ".mp3";
  playSound(randomChosenSound);
}


$(".btn").on("click", function() {

  var userChosenColour = this.id;

  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

  // $("#"+userChosenColour).fadeOut(100).fadeIn(200);
  animatePress(userChosenColour);

  var userChosenSound = "sounds/" + userChosenColour + ".mp3";
  playSound(userChosenSound);

  checkAnswer(index);
})


function playSound(name) {
  var sound = new Audio(name);
  // sound.play();
  console.log(name);
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(
    function() {
      $("#" + currentColour).removeClass("pressed");
    }, 100);
}


$(document).on("keydown", function(){
  if (gameOn===false) {
    // level=0;
    // $("#level-title").text("Level "+level);
    // gameOn=true;
    nextSequence();
    gameOn=true;
  }
})

// var timestamp = 0;
// for (var i = 0; i < 3; i++) {
//   setTimeout(function() {
//     nextSequence()
//   }, timestamp += 1000)
//   // level++;
// }

function checkAnswer(currentLevel){
  for (var i = 0; i<currentLevel; i++){
    if userClickedPattern[i] === gamePattern[i]{
      correct=correct && true;
    } else {
      correct=correct && false;
    }

  }

}
