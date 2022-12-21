const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

const computeRound = (playerSelection, computerSelection) => {
  const playerScore = document.querySelector(".player-score");
  const computerScore = document.querySelector(".computer-score");
  const playerDisplay = document.querySelector(".player-selection");
  const computerDisplay = document.querySelector(".computer-selection");
  const resultDisplay = document.querySelector(".result");
  const gameStateDisplay = document.querySelector(".game-state");

  if (playerScore.textContent >= 5 || computerScore.textContent >= 5) {
    gameStateDisplay.textContent = "";
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    playerDisplay.textContent = "...";
    computerDisplay.textContent = "...";
    resultDisplay.textContent = "Waiting on Player";
  }

  let playerSelectionLower = playerSelection.toLowerCase();
  let computerSelectionLower = computerSelection.toLowerCase();
  let result = 0;

  playerDisplay.textContent =
    playerSelectionLower[0].toUpperCase() +
    playerSelectionLower.slice(1, playerSelectionLower.length);

  computerDisplay.textContent =
    computerSelectionLower[0].toUpperCase() +
    computerSelectionLower.slice(1, computerSelectionLower.length);

  switch (playerSelectionLower) {
    case "rock":
      switch (computerSelectionLower) {
        case "paper":
          result = -1;
          break;
        case "scissors":
          result = 1;
          break;
      }
      break;
    case "paper":
      switch (computerSelectionLower) {
        case "scissors":
          result = -1;
          break;
        case "rock":
          result = 1;
          break;
      }
      break;
    case "scissors":
      switch (computerSelectionLower) {
        case "rock":
          result = -1;
          break;
        case "paper":
          result = 1;
          break;
      }
      break;
  }

  if (result === 1) {
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
    resultDisplay.textContent = "You Win!";
  } else if (result === -1) {
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
    resultDisplay.textContent = "You Lose!";
  } else {
    resultDisplay.textContent = "That's a Draw!";
  }

  if (playerScore.textContent >= 5) {
    gameStateDisplay.textContent = "Victory!";
  } else if (computerScore.textContent >= 5) {
    gameStateDisplay.textContent = "Defeat!";
  }
};

const gameStart = () => {
  const btns = document.querySelectorAll(".btn");
  btns.forEach((e) => {
    e.addEventListener("click", (e) => {
      computeRound(e.target.value, getComputerChoice());
    });
  });
};
