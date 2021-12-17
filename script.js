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

function playerSelection() {
    const input = prompt('Rock, paper or scissors?');
    const choice = input.toUpperCase();

    if (choice === 'ROCK' || choice === 'PAPER' || choice === 'SCISSORS') {
        return choice;
    } else {
        return playerSelection();
    }
}

function computerSelection() {
    return computerPlay().toUpperCase();
}



console.log(computerSelection());