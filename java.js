let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


function determineWinner(playerChoice, computerChoice) {

  if (playerChoice === computerChoice) {
    return "Tie";
  }

  if (playerChoice === "rock" && computerChoice === "scissors") {
    return "Player";
  }
  else if (playerChoice === "paper" && computerChoice === "rock") {
    return "Player";
  }
  else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "Player";
  }
  else {
    return "Computer";
  }

}


function updateScore(roundResult) {

  if (roundResult === "Player") {
    playerScore = playerScore + 1;
  }
  else if (roundResult === "Computer") {
    computerScore = computerScore + 1;
  }

}


function updateDisplay(playerChoice, computerChoice, roundResult) {

  document.querySelector("#playerChoice").textContent = playerChoice;
  document.querySelector("#computerChoice").textContent = computerChoice;
  document.querySelector("#result").textContent = roundResult;

  document.querySelector("#playerScore").textContent = playerScore;
  document.querySelector("#computerScore").textContent = computerScore;

}


function playRound(playerChoice) {

  let computerChoice = getComputerChoice();

  let roundResult = determineWinner(playerChoice, computerChoice);

  updateScore(roundResult);

  updateDisplay(playerChoice, computerChoice, roundResult);

}