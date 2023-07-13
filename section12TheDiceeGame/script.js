// imageFolder="images/"
imageList=[
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
];


ply1Dice=Math.floor(Math.random()*6);
ply2Dice=Math.floor(Math.random()*6);

ply1Img=imageList[ply1Dice];
ply2Img=imageList[ply2Dice];

// alert(ply1Dice + " " + ply2Dice);
document.querySelector(".img1").setAttribute("src",ply1Img);
document.querySelector(".img2").setAttribute("src",ply2Img);

if (ply1Dice>ply2Dice) {
  // alert("Player1 Win!");
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if (ply1Dice<ply2Dice) {
  // alert("Player2 Win!");
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else {
  // alert("Draw!");
  document.querySelector("h1").innerHTML="Draw!";

}
