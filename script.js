const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.querySelector("#computer-score");
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
    hasWon ? playerScoreSpan.innerHTML = parseInt(playerScoreSpan.innerHTML) + 1 : 
             computerScoreSpan.innerHTML = parseInt(computerScoreSpan.innerHTML) + 1; 
}

function selectEvent(button) {
    let maxScore = 5;

    playerChoice = button.textContent;
    getComputerChoice();
    resultPlayer.textContent = `${playerChoice}`;
    resultComputer.textContent = `${computerChoice}`;
    resultOutcome.textContent = checkWinner();
    incrementRound(); 
    
    let playerScore = parseInt(playerScoreSpan.innerHTML);
    let computerScore = parseInt(computerScoreSpan.innerHTML);
    if (playerScore === maxScore || computerScore === maxScore) {
        console.log("End Game");
    }
}

function incrementRound() {
    roundCount++
    roundCountSpan.innerHTML = roundCount;
}

playerSelection.forEach(button => button.addEventListener("click", () => {
    selectEvent(button);
}));

// If playerScoreSpan > computer score {
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