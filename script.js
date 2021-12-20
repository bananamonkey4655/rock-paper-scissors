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

    /* main */
    const buttons = document.querySelectorAll('button');
    const resultText = document.querySelector('#result');
    const playerScoreText = document.querySelector('#player-score');
    const computerScoreText = document.querySelector('#computer-score');
    const roundsPlayedText = document.querySelector('#rounds-played span');

    let playerSelection;
    let playerScore;
    let computerScore;
    let roundsPlayed;
    reset();

    buttons.forEach( (button) => {
        button.addEventListener('click', (e) => { 
            if (roundsPlayed === 5) {
                reset();
            }
            updateScoreboard(e);
        });
    });

    /* functions */

    function reset() {
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
        resultText.textContent = '';
        playerScoreText.textContent = '0';
        computerScoreText.textContent = '0';
        roundsPlayedText.textContent = '0';
    }

    function updateScoreboard(event) {
        playerSelection = event.target.getAttribute("data-type").toUpperCase();
        const result = playRound(playerSelection, getComputerSelection());
        resultText.textContent = result;
        roundsPlayedText.textContent = roundsPlayed;
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        if (roundsPlayed === 5) {
            let declareWinner;
            if (playerScore === computerScore) {
                declareWinner = 'A legendary battle... it ends in stalemate.';
            } else if (playerScore > computerScore) {
                declareWinner = 'Victory over the computer!';
            } else {
                declareWinner = 'The computer is victorious!';
            }
            resultText.textContent = declareWinner;
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

