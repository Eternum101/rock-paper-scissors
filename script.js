// Declaring variables
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

// Generates a random computer choice for rock-paper-scissors
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

// Updates the round score by incrementing either the player's or 
// computer's score based on whether the player has won
function setRoundScore(hasWon) {
    hasWon ? playerScoreSpan.innerHTML = parseInt(playerScoreSpan.innerHTML) + 1 : 
             computerScoreSpan.innerHTML = parseInt(computerScoreSpan.innerHTML) + 1;
}

// Determines the outcome of a game round, updates the scores and returns a string 
// indicating the outcome
function setRoundText() {
       if (playerChoice === "🪨" && computerChoice === "📰") {
        setRoundScore(false);
        return "You Lose! Paper beats Rock!";
    } else if (playerChoice === "📰" && computerChoice === "🪨") {
        setRoundScore(true);
        return "You Win! Paper beats Rock!";
    } else if (playerChoice === "✂️" && computerChoice === "🪨") {
        setRoundScore(false);
        return "You Lose! Rock beats Scissors!"; 
    } else if (playerChoice === "🪨" && computerChoice === "✂️") {
        setRoundScore(true);
        return "You Win! Rock beats Scissors!";
    } else if (playerChoice === "📰" && computerChoice === "✂️") {
        setRoundScore(false);
        return "You Lose! Scissors beats Paper!";
    } else if (playerChoice === "✂️" && computerChoice === "📰") {
        setRoundScore(true);
        return "You Win! Scissors beats Paper!";
    } else if (playerChoice === computerChoice) {
        return "Draw!"; 
    }
}

// Determines whether the player has won a game round
function hasPlayerWon() {
    return (playerChoice === "📰" && computerChoice === "🪨" || 
        playerChoice === "🪨" && computerChoice === "✂️" ||
        playerChoice === "✂️" && computerChoice === "📰");
}

// Increments the round score
function incrementRound() {
    roundCount++
    roundCountSpan.innerHTML = roundCount;
}

// Checks the current state of the game and ends the game if either the player or 
// computer has reached the max score
function checkGameState() {
    let maxScore = 5;
    playerScore = parseInt(playerScoreSpan.innerHTML);
    computerScore = parseInt(computerScoreSpan.innerHTML);
    if(playerScore === maxScore || computerScore === maxScore) {
        endGame();
    }
}

// Appends the player's and computer's choices to the round history by calling the 
// createScoreElement() function
function appendToRoundHistory(playerDescision, computerDescision) {
    let isDraw = playerChoice === computerChoice;
    createScoreElement(playerHistory, playerDescision, hasPlayerWon() && !isDraw, isDraw);
    createScoreElement(computerHistory, computerDescision, !hasPlayerWon() && !isDraw, isDraw); 
}

// Creates and appends an element representing the player's or computer's choice to 
// the round history
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

// Ends the game, displays the final result and shows the play again button
function endGame() {
    let result = playerScore > computerScore ? "You Won!" : "You Lost!";
    modal.style.visibility = 'visible';
    gameEndText.textContent = result;
    buttonPlayAgain.style.visibility = 'visible';
}

// Plays a round of the game by updating the player's and computer's choices, updating
// the round history and checking the game state
function playRound(button) {
    playerChoice = button.textContent;
    computerChoice = getComputerChoice();
    appendToRoundHistory(playerChoice, computerChoice);
    resultOutcome.textContent = setRoundText();
    incrementRound(); 
    checkGameState();
    resetGame();
}

// Adds an event listener to each button in the playerSelection array to play a round
// of the game when clicked
playerSelection.forEach(button => button.addEventListener("click", () => {
    playRound(button);
}));

// Resets the game by reloading the page when the play again button is clicked
function resetGame() {
    buttonPlayAgain.addEventListener('click', () => {
        window.location.reload();
    });
}