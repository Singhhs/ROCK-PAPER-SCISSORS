// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
  });
});


let userInput = 

const playerSelection = capitalize()
const computerSelection = computerPlay()
 
 function capitalize (){ //takes the userinput string and returns that string with only the first letter capitalized.
        let makeAllLowerCase = userInput.toLowerCase() 
        let userInputCapitalized =  makeAllLowerCase.charAt(0).toUpperCase() + makeAllLowerCase.slice(1); 
        return (userInputCapitalized);
}

function computerPlay () {//Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
        let computerChoice = Math.random();
        if (computerChoice <= 0.34) {
        return ('Rock')
        } else if (computerChoice <= 0.67) {
            return ('Paper')
        } else {
            return ('Scissors')
            }
    };


function game(){ 

    console.log(playRound(playerSelection, computerSelection))
   
    function playRound(playerSelection, computerSelection) { //Compares the players choice with the computers and return the winner and choices of both
        console.log("You picked " + playerSelection + " and the computer choose " + computerSelection)
            if (playerSelection === computerSelection) {
            return "its a draw";
        }
        else if (playerSelection === "Rock") {
            if (computerSelection === "Scissors") {
                return "rock wins"; 
            }
            else {
                return "paper wins"; 
            }
        }
        else if (playerSelection === "Paper") {
            if (computerSelection === "Rock") {
                return "paper wins";
            }
            else {
                return "scissors wins";
            }
        }
        else if (playerSelection === "Scissors") {
            if (computerSelection === "Rock") {
                return "Rock wins";
            }
            else {
                return "Scissors wins";
            }
        }
        else {
            return "invalid choice by user";
        }
        }
}
    console.log(game())