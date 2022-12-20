const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

const getUserChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  let isValid = false;
  let userInput = "";

  while (!isValid) {
    userInput = prompt('Select "Rock", "Paper", or "Scissors"!');
    userInput = userInput.trim().toLowerCase();

    for (let i = 0; i < choices.length; i++) {
      if (userInput === choices[i]) {
        isValid = true;
      }
    }

    if (!isValid) {
      alert("Invalid selection, please try again.");
    }
  }

  return userInput;
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

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection = "";
  let computerSelection = "";
  let result = "";

  for (let i = 0; i < 5; i++) {
    playerSelection = getUserChoice();
    computerSelection = getComputerChoice();
    result = computeRound(playerSelection, computerSelection);

    if (result === "You Win!") {
      playerScore++;
    } else if (result === "You Lose!") {
      computerScore++;
    }

    console.log(
      `${result}\nPlayer Score: ${playerScore} | Computer Score: ${computerScore}`
    );
  }

  if (playerScore > computerScore) {
    console.log("Congratulations, you Win!");
  } else if (playerScore === computerScore) {
    console.log("That's a Draw!");
  } else {
    console.log("You Lose!");
  }
};
