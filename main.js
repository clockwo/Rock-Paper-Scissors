//Function what return string value
function getHandSign(choice) {
  switch (choice) {
    case 1:
      return 'rock';

    case 2:
      return 'paper';

    case 3:
      return 'scissors';

    default:
      return;
  }
}

//Function what return random int value between 1 - 3
function getComputerChoice() {
  let maxRandomValue = 3;
  return Math.floor(Math.random() * maxRandomValue) + 1;
}

// Function what ask user to input value between 1-3

// Function what make decision if user win
function isPlayerWin(playerSelection, computerSelection) {
  const ROCK = 'rock';
  const PAPER = 'paper';
  const SCISSORS = 'scissors';

  if (
    (playerSelection === ROCK && computerSelection === SCISSORS) ||
    (playerSelection === SCISSORS && computerSelection === PAPER) ||
    (playerSelection === PAPER && computerSelection === ROCK)
  ) {
    return true;
  }
  return false;
}

function playRound(playerSelection, computerSelection) {
  if (isPlayerWin(playerSelection, computerSelection)) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === computerSelection) {
    return `It's a draw!`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const computerSelection = getHandSign(getComputerChoice());
const userSelection = getHandSign(parseInt(prompt('Write number between 1-3')));
console.log(computerSelection + 'computer');
console.log(userSelection + 'user');
console.log(playRound(userSelection, computerSelection));
