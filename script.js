/* obsolete */
// function getPlayerSelection() {
//     const input = prompt('Rock, paper or scissors?');
//     const choice = input.toUpperCase();

//     if (choice === 'ROCK' || choice === 'PAPER' || choice === 'SCISSORS') {
//         return choice;
//     } else {
//         return getPlayerSelection();
//     }
// }

function game() {
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;
    const buttons = document.querySelectorAll('button');
    const resultText = document.querySelector('#result');
    const playerScoreText = document.querySelector('#player-score');
    const computerScoreText = document.querySelector('#computer-score');
    const declareWinnerText = document.querySelector('#declare-winner');

    buttons.forEach( (button) => {
        button.addEventListener('click', (e) => { 
            if (roundsPlayed === 5) {
                reset();
            }
            updateScoreboard(e);
        });
    });

    function reset() {
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
        resultText.textContent = '';
        playerScoreText.textContent = '0';
        computerScoreText.textContent = '0';
        declareWinnerText.textContent = '';
    }

    function updateScoreboard(event) {
        playerSelection = event.target.id.toUpperCase();
        const result = playRound(playerSelection, getComputerSelection());
        resultText.textContent = result;
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        if (roundsPlayed === 5) {
            let declareWinner;
            if (playerScore === computerScore) {
                declareWinner = 'A legendary battle... it ends in stalemate.'
            } else if (playerScore > computerScore) {
                declareWinner = 'You win! Victory over the computer!'
            } else {
                declareWinner = 'You lost! The computer is victorious!'
            }
            declareWinnerText.textContent = declareWinner;
        }
    }

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
    
    function getComputerSelection() {
        return computerPlay().toUpperCase();
    }

    function getWinner(playerSelection, computerSelection) {
        const winStatement = `You win! ${playerSelection} beats ${computerSelection}`;
        const loseStatement = `You lose! ${computerSelection} beats ${playerSelection}`;
        if (playerSelection === 'ROCK') {
            if (computerSelection === 'SCISSORS') {
                playerScore++;
                return winStatement;
            } else {
                computerScore++;
                return loseStatement;
            }
        } else if (playerSelection === 'PAPER') {
            if (computerSelection === 'ROCK') {
                playerScore++;
                return winStatement;
            } else {
                computerScore++;
                return loseStatement;
            }
        } else {
            if (computerSelection === 'PAPER') {
                playerScore++;
                return winStatement;
            } else {
                computerScore++;
                return loseStatement;
            }
        }
    }
    
    function playRound(playerSelection, computerSelection) {
        roundsPlayed++;
        if (playerSelection === computerSelection) {
            return 'It\'s a draw! Try again.';
        } else {
            return getWinner(playerSelection, computerSelection);
        }
    }
}

game();

