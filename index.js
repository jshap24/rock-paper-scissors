
let playerScore = 0
let computerScore = 0


function game() {

   
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


let playerInput = prompt("Rock Paper Scissors, shoot!");



function playRound() {


    const playerSelection = playerInput.toLowerCase();
    const computerSelection = getComputerChoice();
    
    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return "Tie Game. Play again.";
    } else if (playerSelection === 'rock' && computerSelection == 'paper') {
        computerScore = computerScore + 1;
        return "You lose! Paper beats Rock.";
    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        playerScore++;
        return ("You win! Rock beats scissors.");
    } else if (playerSelection === 'scissors' && computerSelection == 'scissors') {
        return ("Tie Game. Play again.");
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return ("You lose! Rock beats scissors.");
    } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return ("You win! Scissors beats paper.");
        
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        computerScore++;
        return ("You lose! Scissors beats paper.");
        
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        playerScore++;
        return ("You win! Paper beats rock.");
        
    } else if (playerSelection === 'paper' && computerSelection == 'paper') {
        return ("Tie Game. Play again.");
    } else {
        return ("Not a valid entry. Try again");
    }

}

console.log(playRound());
console.log(playerScore + "vs." + computerScore);


}

for (let i = 0; i < 5; i++) {
    game();
}