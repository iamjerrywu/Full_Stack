let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(human_guess, computer_guess, target) {
    if (getAbsoluteDistance(human_guess, target) <= getAbsoluteDistance(computer_guess, target)) {
        return true;
    } else {
        return false;
    }
}

function getAbsoluteDistance(num1, num2) {
    return Math.abs(num1 - num2);
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore+=1
    } else {
        computerScore+=1
    }
}

function advanceRound() {
    currentRoundNumber+=1
}