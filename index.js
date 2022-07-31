

function getComputerChoice() {

let randomNumber = Math.floor(Math.random() * 3);

switch (randomNumber) {
    case 0:
        return 'rock';
        break;
    case 1:
        return 'scissors';
        break;
    case 2:
        return 'paper';
        break;
    default:
        return 'There was an error';
        break;
}
}
console.log(getComputerChoice());

const playerSelection = "rock";
playerSelection.toLowerCase();
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        alert("Tie Game. Play again.");
    } else if (playerSelection === 'rock' && computerSelection == 'paper') {
        alert("You lose! Paper beats Rock.");
    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        alert("You win! Rock beats scissors.");
    }
    }

console.log(playRound(playerSelection, computerSelection));