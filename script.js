let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  let randomInt = Math.floor(Math.random() * 10);

  return randomInt;
};

const compareGuesses = (human, computer, secret) => {
  let humanDifference = Math.abs(human - secret);
  let computerDifference = Math.abs(computer - secret);
  if (computerDifference >= humanDifference) {
    return true;
  } else {
    return false;
  }
};
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
