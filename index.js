// Select all the elements that we will need
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

// Iterate over choiceBtns using forEach() method
choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

// A function to select between ROCK, PAPER and SCISSORS
function computerTurn() {
  const randNumber = Math.floor(Math.random() * 3) + 1;

  switch (randNumber) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

// A function to check the winner
function checkWinner() {
  if (player == computer) {
    return "Draw";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You win" : "You lose";
  } else if (computer == "PAPER") {
    return player == "SCISSORS" ? "You win" : "You lose";
  } else if (computer == "SCISSORS") {
    return player == "ROCK" ? "You win" : "You lose";
  }
}
