let target = 7;
let userGuess = 0;
let app = document.getElementById("app");
function startGame() {
  userGuess = window.prompt("Guess a number.");
}

// const start = document.createElement("button");

// app.appendChild(start);

// start.innerText = "Begin Game";

// document.querySelector("button").addEventListener("click", startGame());
// I was going to add buttons but I'm lazy
startGame();

if (userGuess == 7) {
  window.alert("You Win!");
} else if (userGuess < 0) {
  window.prompt("Try a positive integer!");
} else if (userGuess < 7) {
  window.prompt("Try Higher!");
} else if (userGuess > 100) {
  window.prompt("Way too high!");
} else if (userGuess > 50) {
  window.prompt("Too high!");
} else if (userGuess > 7) {
  window.prompt("A bit high!");
}
