function computerPlay() {
    const num = Math.floor(3 * Math.random());
    if (num === 0) {
        return 'Rock';
    } else if (num === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getPlayerSelection() {
    const input = prompt('Rock, paper or scissors?');
    const choice = input.toUpperCase();

    if (choice === 'ROCK' || choice === 'PAPER' || choice === 'SCISSORS') {
        return choice;
    } else {
        return getPlayerSelection();
    }
}

function getComputerSelection() {
    return computerPlay().toUpperCase();
}

function getWinner(playerSelection, computerSelection) {
    const winStatement = `You win! ${playerSelection} beats ${computerSelection}`;
    const loseStatement = `You lose! ${computerSelection} beats ${playerSelection}`;
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'SCISSORS') {
            return winStatement;
        } else {
            return loseStatement;
        }
    } else if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            return winStatement;
        } else {
            return loseStatement;
        }
    } else {
        if (computerSelection === 'PAPER') {
            return winStatement;
        } else {
            return loseStatement;
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a draw! Try again.';
    } else {
        return getWinner(playerSelection, computerSelection);
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerSelection(), getComputerSelection()));
    }
}

game();