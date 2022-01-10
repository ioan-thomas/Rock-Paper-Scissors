let things = {
    humanScore: 0,
    computerScore: 0,

    computerPlay(){
        let choices = ['rock', 'paper', 'scissors'];
        return choices[Math.floor(Math.random() * choices.length)];
    },

    playRound(computerSelection, playerSelection){
        let outcome;
        switch (computerSelection + playerSelection) {
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                return outcome = `You chose ${playerSelection} and the computer chose ${computerSelection}. It's a DRAW!`;
            case 'rockpaper':
            case 'paperscissors':
            case 'scissorsrock':
                things.humanScore += 1;
                return outcome = `You win this round, ${playerSelection} beats ${computerSelection}!`;
            case 'paperrock':
            case 'scissorspaper':
            case 'rockscissors':
                things.computerScore += 1;
                return outcome = `You lose this round, ${computerSelection} beats ${playerSelection}!`;
        }

    
    },
    totalScore: 0

};

const game = () => {

    for(i = 0; i < 5; i++) {
        console.log(i);
        console.log(`Your score: ${things.humanScore}`);
        console.log(`The computer score: ${things.computerScore}`);

        let computerSelection = things.computerPlay();
        let playerSelection = prompt('What is your play?');

        playerSelection = playerSelection.toLowerCase();

        console.log(things.playRound(computerSelection, playerSelection));
    }

    console.log(`Your final score: ${things.humanScore}`);
        console.log(`The final computer score: ${things.computerScore}`);


        if (things.humanScore > things.computerScore){
            console.log('CONGRATULATIONS! You WIN!');
            return;
        } else if(things.humanScore < things.computerScore){
            console.log('You LOSE! Try again.');
            return;
        } else if(things.humanScore == things.computerScore){
            console.log("It's a DRAW! Play again?");
            return;
        };
    }   


console.log(game());
