const playerScore = document.getElementById("player-score");
const computerScore = document.querySelector("#computer-score");
const resultOutcome = document.querySelector("#result-outcome");
const playerSelection = document.querySelectorAll(".buttons");
const resultPlayer = document.querySelector(".result-selection-player");
const resultComputer = document.querySelector(".result-selection-computer");
const roundCountSpan = document.getElementById("round-count"); 

let playerChoice;
let computerChoice;
let result;
let roundCount = 1;

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3) + 1;
    
    switch (randomChoice) {
        case 1: 
            computerChoice = "🪨";
            break;
        case 2: 
            computerChoice = "📰";
            break;
        case 3: 
            computerChoice = "✂️";
            break;
    }
}

function checkWinner() {
       if (playerChoice === "🪨" && computerChoice === "📰") {
        hasPlayerWon(false);
        return "You lose! Paper beats Rock!"; 
    } else if (playerChoice === "📰" && computerChoice === "🪨") {
        hasPlayerWon(true);
        return "You win! Paper beats Rock!";
    } else if (playerChoice === "✂️" && computerChoice === "🪨") {
        hasPlayerWon(false);
        return "You lose! Rock beats Scissors!"; 
    } else if (playerChoice === "🪨" && computerChoice === "✂️") {
        hasPlayerWon(true);
        return "You win! Rock beats Scissors!";
    } else if (playerChoice === "📰" && computerChoice === "✂️") {
        hasPlayerWon(false);
        return "You lose! Scissors beats Paper!";
    } else if (playerChoice === "✂️" && computerChoice === "📰") {
        hasPlayerWon(true);
        return "You win! Scissors beats Paper!";
    } else if (playerChoice === computerChoice) {
        return "Draw!"; 
    }
}

function hasPlayerWon(hasWon) {
    hasWon ? playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1 : 
             computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1; 
}

function selectEvent(button) {
    if(roundCount < 5) {
        playerChoice = button.textContent;
        getComputerChoice();
        resultPlayer.textContent = `${playerChoice}`;
        resultComputer.textContent = `${computerChoice}`;
        resultOutcome.textContent = checkWinner();
        incrementRound();
    } else {
        alert("Game Over Nerd"); 
    }
}

function incrementRound() {
    roundCount++
    roundCountSpan.innerHTML = roundCount;
}

playerSelection.forEach(button => button.addEventListener("click", () => {
    selectEvent(button);
}));

// If playerscore > computer score {
    "You won! Congragulations!" 
//} else {
    "You lost! :("
//}

//function playRound(playerSelection, computerSelection) {

//    if (playerSelection === "Rock" && computerSelection === "Paper") {
//        return "You lose! Paper beats Rock!"; 
//    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
//        return "You win! Paper beats Rock!";
//    } else if (playerSelection === "Scissors" ** computerSelection === "Rock") {
//        return "You lose! Rock beats Scissors!"; 
//    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
//        return "You win! Rock beats Scissors!";
//    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
//        return "You lose! Scissors beats Paper! ";
//    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
//        return "You win! Scissors beats Paper!";
//    } else if (playerSelection === computerSelection) {
//        return "Draw"; 
//    }
//}

//function game() {
//    for (let i = 0; i < 5; i++) {
//        let playerSelection = prompt("Enter Rock, Paper or Scissors");
//        let computerSelection = getComputerChoice();
//        console.log(playRound(playerSelection, computerSelection));
//    }
//}
//game();