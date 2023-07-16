const buttons = document.querySelectorAll('.btn');
const roundDisplayInfo = document.querySelector('.round-info');
const playerScoreView = document.querySelector('.player-score');
const computerScoreView = document.querySelector('.computer-score');
const gameResultView = document.querySelector('.game-result');
const endInfo = document.querySelector('.end');
const resetBtn = document.querySelector('.reset');

const MAX_SCORE = 5;

const winningCondition = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

let roundResult = '';
let playerScore = 0;
let computerScore = 0;

function isEndGame(firstScore, lastScore) {
  return firstScore === MAX_SCORE || lastScore === MAX_SCORE;
}

// Error handler function
function errorHandler(message) {
  console.log(message);
}

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

function isPlayerWin(playerSelection, computerSelection) {
  return winningCondition[playerSelection] === computerSelection;
}

function playRound(playerSelection) {
  if (isEndGame(playerScore, computerScore)) {
    return;
  }

  let computerSelection = getHandSign(getComputerChoice());
  if (isPlayerWin(playerSelection, computerSelection)) {
    roundResult = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else if (playerSelection === computerSelection) {
    roundResult = `It's a draw!`;
  } else {
    roundResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }

  if (isEndGame(playerScore, computerScore)) {
    showGameEndResult(computerScore, playerScore);
  }
}

function showGameEndResult(computerScore, playerScore) {
  let gameResult = '';

  if (computerScore > playerScore) {
    gameResult = `The game has ended, you lose! Computer has ${computerScore}, you have ${playerScore}`;
  } else {
    gameResult = `The game has ended, you won! Computer has ${computerScore}, you have ${playerScore}`;
  }
  gameResultView.innerHTML = gameResult;
  endInfo.classList.remove('hide');
}

function update() {
  roundDisplayInfo.innerHTML = roundResult;
  playerScoreView.innerHTML = playerScore;
  computerScoreView.innerHTML = computerScore;
}

resetBtn.addEventListener('click', (e) => {
  playerScore = 0;
  computerScore = 0;
  endInfo.classList.add('hide');
  update();
});

[...buttons].forEach((btn) =>
  btn.addEventListener('click', (e) => {
    let playerSelection = btn.dataset.item;
    playRound(playerSelection);
    update();
  })
);
