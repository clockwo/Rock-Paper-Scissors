// Error handler function
function errorHandler(message) {
  console.log(message);
}

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
      errorHandler('Something went wrong with getHandSign()');
      return 'Invalid input';
  }
}

//Function what return random int value between 1 - 3
function getComputerChoice() {
  let maxRandomValue = 3;
  return Math.floor(Math.random() * maxRandomValue) + 1;
}

// Function what ask user to input choice
//TODO: Add validation for player input
function getPlayerChoice() {
  return prompt('Rock or Paper or Scissors? Write:').toLowerCase();
}

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
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return true;
  } else if (playerSelection === computerSelection) {
    console.log(`It's a draw!`);
    return 'draw';
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return false;
  }
}

function showGameEndResult(computerScore, playerScore) {
  if (computerScore > playerScore) {
    console.log(
      `The game has ended, you lose! Computer has ${computerScore}, you have ${playerScore}`
    );
  } else {
    console.log(
      `The game has ended, you won! Computer has ${computerScore}, you have ${playerScore}`
    );
  }
}

// function what contain results of each round and call new round
function game() {
  const MAX_ROUNDS = 5;
  let playerScore = 0;
  let computerScore = 0;
  let gameContinue = true;
  let counter = 0;
  while (gameContinue) {
    counter++;
    let computerSelection = getHandSign(getComputerChoice());
    let playerSelection = getPlayerChoice();
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult) {
      playerScore++;
    } else if (!roundResult) {
      computerScore++;
    }

    if (counter === MAX_ROUNDS) {
      gameContinue = false;
    }
  }
  showGameEndResult(computerScore, playerScore);
}

game();
