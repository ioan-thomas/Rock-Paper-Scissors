let humanScore = 0;
let computerScore = 0;
let playerSelected;
let computerSelection = undefined;
const overallOutcome = document.querySelector('h3');
const outcome = document.querySelector('#display-outcome');
const score = document.querySelector('#score');
score.textContent = `${humanScore} : ${computerScore}`;

const computerPlay = () => {
    let choices = ['Rock', 'Paper', 'Scissors'];
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
};


const playRound = () => {
    console.log(`Computer = ${computerSelection} and User = ${playerSelected}.`);

    switch (computerSelection + playerSelected) {
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            outcome.textContent = `It's a DRAW! You both chose ${playerSelected.toLowerCase()}.`;
            return;

        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            score.textContent = `${humanScore += 1} : ${computerScore}`;
            outcome.textContent = `You WIN! ${playerSelected} beats ${computerSelection.toLowerCase()}.`;
            return;
        case 'PaperRock':
        case 'ScissorsPaper':
        case 'RockScissors':
            score.textContent = `${humanScore} : ${computerScore += 1}`;
            outcome.textContent = `You LOSE! ${computerSelection} beats ${playerSelected.toLowerCase()}.`;
            return;
    }
};
 
const game = () => {
    // let computerSelection = computerPlay();
    computerPlay();
    playRound();

    if (humanScore === 5){
        console.log(`Win. User score is ${humanScore} and computer score is ${computerScore}`)
        overallOutcome.textContent = 'CONGRATULATIONS! You WIN!';
        return;
    } else if(computerScore === 5){
        console.log(`Lost. User score is ${humanScore} and computer score is ${computerScore}`)
        overallOutcome.textContent = 'You LOSE! Try again.';
        return;
    } else if(humanScore === 5 && computerScore ===5){
        console.log(`User score is ${humanScore} and computer score is ${computerScore}`)
        overallOutcome.textContent = "It's a DRAW! Play again?";
        return;
    };
};  

    // creates node list of all elements with class of btn - cannot add event listeners to node list - need to add them individually.
const playerSelection = document.querySelectorAll('img');
playerSelection.forEach(image => 
    { image.addEventListener('click', e => {
        playerSelected = e.target.id;
        game();
        });
    }
);
    
    

