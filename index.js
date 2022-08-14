
let user = ["Player", "Computer"];
let playerScore = 0
let computerScore = 0
let gameIsOver = false;

const rockBtn = document.getElementById("rockBtn");
rockBtn.addEventListener("click", function(e) {
    const playerSelection = 'rock';
    console.log(playerSelection);
    game('rock');
})

const paperBtn = document.getElementById("paperBtn");
paperBtn.addEventListener("click", function(e) {
    const playerSelection = 'paper';
    console.log(playerSelection);
    game('paper');
})

const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.addEventListener("click", function(e) {
    const playerSelection = 'scissors';
    console.log(playerSelection);
    game('scissors');
})

function game(playerSelection) {

   
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



const computerSelection = getComputerChoice();

function playRound() {

    if (playerSelection == 'rock' && computerSelection == 'rock') {
        return "Tie Game. Play again.";
    } else if (playerSelection === 'rock' && computerSelection == 'paper') {
        computerScore = computerScore + 1;
        endGame();
        return "You lose! Paper beats Rock.";
    } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
        playerScore++;
        endGame();
        return ("You win! Rock beats scissors.");
    } else if (playerSelection === 'scissors' && computerSelection == 'scissors') {
        endGame();
        return ("Tie Game. Play again.");
    } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
        computerScore++;
        endGame();
        return ("You lose! Rock beats scissors.");
    } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return ("You win! Scissors beats paper.");
        
    } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
        computerScore++;
        endGame();
        return ("You lose! Scissors beats paper.");
    } else if (playerSelection === 'paper' && computerSelection == 'rock') {
        playerScore++;
        endGame();
        return ("You win! Paper beats rock.");
        
    } else if (playerSelection === 'paper' && computerSelection == 'paper') {
        return ("Tie Game. Play again.");
    } else {
        return ("Not a valid entry. Try again");
    }   
}

const resultSelection = document.getElementById("result-selection");
resultSelection.innerHTML = playRound();
const yourScoreBoard = document.getElementById("yourScore").innerHTML = playerScore;
const computerScoreBoard = document.getElementById("computerScore").innerHTML = computerScore;
}
 
function addSelectionResult() {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div);
}

let winnerName = document.getElementById("winnerName")

let isGameOver = (score) => {
    if (playerScore === 5 || computerScore === 5) {
        return true;
    }
    return false;
}

function endGame() {
    console.log(isGameOver());
    if ( isGameOver() ) {
        openPopup();
        
      } else {
      return console.log("game is still on");
    }}



let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
    if (playerScore === 5) {
        document.getElementById('winnerName').innerHTML = "";
        winnerName.textContent += "You win the game!!!";
      //  return true;
    } else if (computerScore === 5) {
        document.getElementById('winnerName').innerHTML = "";
        winnerName.textContent += "The computer wins the game!!!";
       // return true;
    } return false;
}

function replay(){
    popup.classList.remove("open-popup");
    playerScore = 0;
    computerScore = 0;
}
