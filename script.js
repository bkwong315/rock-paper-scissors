const getComputerChoice = () => {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

const computeRound = (playerSelection, computerSelection) => {
  let playerSelectionLower = playerSelection.toLowerCase();
  let computerSelectionLower = computerSelection.toLowerCase();
  let result = "";

  switch (playerSelectionLower) {
    case "rock":
      switch (computerSelectionLower) {
        case "paper":
          result = "You Lose!";
          break;
        case "rock":
          result = "That's a Draw!";
          break;
        case "scissors":
          result = "You Win!";
          break;
      }
      break;
    case "paper":
      switch (computerSelectionLower) {
        case "scissors":
          result = "You Lose!";
          break;
        case "paper":
          result = "That's a Draw!";
          break;
        case "rock":
          result = "You Win!";
          break;
      }
      break;
    case "scissors":
      switch (computerSelectionLower) {
        case "rock":
          result = "You Lose!";
          break;
        case "scissors":
          result = "That's a Draw!";
          break;
        case "paper":
          result = "You Win!";
          break;
      }
      break;
  }

  return result;
};
