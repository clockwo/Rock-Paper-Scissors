//Function what return string value
function getItem(choice) {
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

function playRound(playerSelection, computerSelection) {
  //check if rock > Scissors
  //check if Scissors > paper
  //check if paper > rock
}

let computerSelection = getItem(getComputerChoice());
console.log(computerSelection);
