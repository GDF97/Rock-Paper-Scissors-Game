const resultDisplay = document.getElementById("results");
const computerChoiceDisplay = document.getElementById("computerChoice");
const playerChoiceDisplay = document.getElementById("playerChoice");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

let buttonsChoice = document.querySelectorAll("button");

let scissorsIcon = document.createElement("i");
scissorsIcon.classList.add("fa-solid", "fa-hand-scissors", "fa-2xl");

let rockIcon = document.createElement("i");
rockIcon.classList.add("fa-solid", "fa-hand-fist", "fa-2x");

let paperIcon = document.createElement("i");
paperIcon.classList.add("fa-solid", "fa-hand", "fa-2xl");

let scissorsIconComputer = document.createElement("i");
scissorsIconComputer.classList.add("fa-solid", "fa-hand-scissors", "fa-2xl");

let rockIconComputer = document.createElement("i");
rockIconComputer.classList.add("fa-solid", "fa-hand-fist", "fa-2x");

let paperIconComputer = document.createElement("i");
paperIconComputer.classList.add("fa-solid", "fa-hand", "fa-2xl");

let player;
let computer;

let playerWins = 0;
let computerWins = 0;

let messageWinner = "You Win!";

buttonsChoice.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoiceDisplay.innerHTML = "";
    computerChoiceDisplay.innerHTML = "";
    player = button.value;
    if (player == "rock") {
      playerChoiceDisplay.append(rockIcon);
    }

    if (player == "paper") {
      playerChoiceDisplay.append(paperIcon);
    }

    if (player == "scissors") {
      playerChoiceDisplay.append(scissorsIcon);
    }

    computerTurn();
    if (computer == "rock") {
      computerChoiceDisplay.append(rockIconComputer);
    }

    if (computer == "paper") {
      computerChoiceDisplay.append(paperIconComputer);
    }

    if (computer == "scissors") {
      computerChoiceDisplay.append(scissorsIconComputer);
    }

    resultDisplay.textContent = checkWinner();
    if (checkWinner() == messageWinner) {
      playerWins++;
      playerScore.textContent = `You: ${playerWins}`;
    } else {
      if (checkWinner() != "Draw") {
        computerWins++;
        computerScore.textContent = `Computer: ${computerWins}`;
      }
    }
  });
});

const computerTurn = () => {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
  }
};

const checkWinner = () => {
  if (player == computer) {
    return "Draw";
  } else if (computer == "paper") {
    return player == "scissors" ? messageWinner : "You Lose!";
  } else if (computer == "rock") {
    return player == "paper" ? messageWinner : "You Lose!";
  } else if (computer == "scissors") {
    return player == "rock" ? messageWinner : "You Lose!";
  }
};
