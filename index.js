

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

let playerInput = prompt("Rock Paper Scissors, shoot!");

let playerSelection = playerInput.toLowerCase();

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
    } else if (playerSelection === 'scissors' && computerSelection == 'scissors') {
        alert("Tie Game. Play again.");
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        alert("You lose! Rock beats scissors.");
    } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        alert("You win! Scissors beats paper.");
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        alert("You lose! Scissors beats paper.");
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        alert("You win! Paper beats rock.");
    } else if (playerSelection === 'paper' && computerSelection == 'paper') {
        alert("Tie Game. Play again.");
    } else {
        alert("Not a valid entry. Try again");
    }
    }

console.log(playRound(playerSelection, computerSelection));