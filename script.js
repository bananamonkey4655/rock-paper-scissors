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
    const roundsPlayedText = document.querySelector('#rounds-played');
    const playerChoice = document.querySelector('.player-choice img');
    const computerChoice = document.querySelector('.computer-choice img');
    const header = document.querySelector('header');
    const resultPic = document.querySelector('.result-pic');

    let playerSelection;
    let computerSelection;
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

    /* helper functions */

    function reset() {
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
        playerScoreText.textContent = '0';
        computerScoreText.textContent = '0';
        roundsPlayedText.textContent = 'ROUND 0';
        header.style.backgroundColor = 'lightskyblue';
        resultPic.src = '';
    }

    function updateScoreboard(event) {
        playerSelection = event.target.getAttribute("data-type").toUpperCase();
        computerSelection = getComputerSelection();
        const result = playRound(playerSelection, computerSelection);

        //update UI
        playerChoice.src = `./images/${playerSelection.toLowerCase()}.png`;
        computerChoice.src = `./images/${computerSelection.toLowerCase()}.png`;
        resultText.textContent = result;
        roundsPlayedText.textContent = 'ROUND ' + roundsPlayed;
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
        if (roundsPlayed === 5) {
            let declareWinner;
            if (playerScore === computerScore) {
                declareWinner = 'A legendary battle... it ends in stalemate.';
                header.style.backgroundColor = 'white';
                resultPic.src = './images/draw.png';
            } else if (playerScore > computerScore) {
                declareWinner = 'Victory over the computer!';
                header.style.backgroundColor = 'lime';
                resultPic.src = './images/victory.png';
            } else {
                declareWinner = 'The computer bested you.';
                header.style.backgroundColor = 'lightsalmon';
                resultPic.src = './images/defeat.png';
            }
            roundsPlayedText.textContent = 'GAME OVER!';
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

