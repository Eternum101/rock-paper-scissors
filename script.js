const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultOutcome = document.querySelector("#result-outcome");
const playerSelection = document.querySelectorAll(".buttons");
const resultPlayer = document.querySelector(".result-selection-player");
const resultComputer = document.querySelector(".result-selection-computer");
const roundCountSpan = document.getElementById("round-count");
const buttonPlayAgain = document.querySelector('.play-again');
const gameEndText = document.querySelector('.game-end-text');
const modal = document.querySelector('.modal');
const playerHistory = document.getElementById("player-history");
const computerHistory = document.getElementById("computer-history");

let playerChoice;
let computerChoice;
let result;
let roundCount = 1;
let playerScore;
let computerScore;

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3) + 1;
    
    switch (randomChoice) {
        case 1: 
            return "🪨";
        case 2: 
            return "📰";
        case 3: 
            return "✂️";
    }
}

function setRoundScore(hasWon) {
    hasWon ? playerScoreSpan.innerHTML = parseInt(playerScoreSpan.innerHTML) + 1 : 
             computerScoreSpan.innerHTML = parseInt(computerScoreSpan.innerHTML) + 1;
}

function setRoundText() {
       if (playerChoice === "🪨" && computerChoice === "📰") {
        setRoundScore(false);
        return "You lose! Paper beats Rock!";
    } else if (playerChoice === "📰" && computerChoice === "🪨") {
        setRoundScore(true);
        return "You win! Paper beats Rock!";
    } else if (playerChoice === "✂️" && computerChoice === "🪨") {
        setRoundScore(false);
        return "You lose! Rock beats Scissors!"; 
    } else if (playerChoice === "🪨" && computerChoice === "✂️") {
        setRoundScore(true);
        return "You win! Rock beats Scissors!";
    } else if (playerChoice === "📰" && computerChoice === "✂️") {
        setRoundScore(false);
        return "You lose! Scissors beats Paper!";
    } else if (playerChoice === "✂️" && computerChoice === "📰") {
        setRoundScore(true);
        return "You win! Scissors beats Paper!";
    } else if (playerChoice === computerChoice) {
        return "Draw!"; 
    }
}

function hasPlayerWon() {
    return (playerChoice === "📰" && computerChoice === "🪨" || 
        playerChoice === "🪨" && computerChoice === "✂️" ||
        playerChoice === "✂️" && computerChoice === "📰");
}

function incrementRound() {
    roundCount++
    roundCountSpan.innerHTML = roundCount;
}

function checkGameState() {
    let maxScore = 5;
    playerScore = parseInt(playerScoreSpan.innerHTML);
    computerScore = parseInt(computerScoreSpan.innerHTML);
    if(playerScore === maxScore || computerScore === maxScore) {
        endGame();
    }
}

function appendToRoundHistory(playerDescision, computerDescision) {
    let isDraw = playerChoice === computerChoice;
    createScoreElement(playerHistory, playerDescision, hasPlayerWon() && !isDraw, isDraw);
    createScoreElement(computerHistory, computerDescision, !hasPlayerWon() && !isDraw, isDraw); 
}

function createScoreElement(parentElement, result, isWinner, isDraw) {
    let playerResult = document.createElement("span");
    playerResult.textContent = result;
    playerResult.classList.add("result-selection-player");
    if (isWinner) {
        playerResult.classList.add("winner");
    } else if (isDraw) {
        playerResult.style.opacity = 0.5;
    }
    parentElement.prepend(playerResult);
}

function endGame() {
    let result = playerScore > computerScore ? "You Won!" : "You Lost!";
    modal.style.visibility = 'visible';
    gameEndText.textContent = result;
    buttonPlayAgain.style.visibility = 'visible';
}

function playRound(button) {
    playerChoice = button.textContent;
    computerChoice = getComputerChoice();
    appendToRoundHistory(playerChoice, computerChoice);
    resultOutcome.textContent = setRoundText();
    incrementRound(); 
    checkGameState();
    resetGame();
}

playerSelection.forEach(button => button.addEventListener("click", () => {
    playRound(button);
}));

function resetGame() {
    buttonPlayAgain.addEventListener('click', () => {
        window.location.reload();
    });
}

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