// 1st image
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "images/" + "dice" + randomNumber1 + ".png";
var image = document.querySelectorAll("img")[0];
image.setAttribute("src",randomDiceImage);

// 2nd image

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/" + "dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);

// winning condition
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber1 == randomNumber2){
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
else{
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
