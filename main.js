const buttons = document.querySelectorAll('.btn');
const roundDisplayInfo = document.querySelector('.round-info');
const playerScoreView = document.querySelector('.player-score');
const computerScoreView = document.querySelector('.computer-score');
const MAX_SCORE = 5;
let roundResult = '';
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;

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

function playRound(playerSelection) {
  let computerSelection = getHandSign(getComputerChoice());
  if (isPlayerWin(playerSelection, computerSelection)) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    roundResult = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else if (playerSelection === computerSelection) {
    console.log(`It's a draw!`);
    roundResult = `It's a draw!`;
  } else {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    roundResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
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

function update() {
  roundDisplayInfo.innerHTML = roundResult;
  playerScoreView.innerHTML = playerScore;
  computerScoreView.innerHTML = computerScore;
}

[...buttons].forEach((btn) =>
  btn.addEventListener('click', (e) => {
    let playerSelection = btn.dataset.item;
    playRound(playerSelection);
    update();
    if (playerScore === MAX_SCORE || computerScore === MAX_SCORE) {
      showGameEndResult(computerScore, playerScore);
    }
  })
);
