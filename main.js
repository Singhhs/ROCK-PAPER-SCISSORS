function computerPlay () {
    // randomly assigns the computer a choice of rock, paper or scissors
       let computerChoice = Math.random();
       if (computerChoice <= 0.34) {
       return ('Rock')
       } else if (computerChoice <= 0.67) {
           return ('Paper')
       } else {
           return ('Scissors')
           }
   };

function playRound(playerSelection, computerSelection) { 
    // Determine who wins, or if there is a tie
    if (playerSelection === computerSelection){
        return 'Tie'
    }
    else if (playerSelection === 'Rock'){
        if(computerSelection === 'Scissors'){
            return 'Win'
        } else{
            return 'Lose'
        }
    }else if (playerSelection === 'Scissors'){
        if( computerSelection === 'Paper'){
            return 'Win'
        } else{
            return 'Lose'
        }
    }else if (playerSelection === 'Paper'){
        if( computerSelection === 'Rock'){
            return 'Win'
        } else{
            return 'Lose'
        }
    }
  }


function game(){ 
// Player and computer choose
let userInput = prompt("pick Rock, Paper or Scissors");

//create event listener for refresh button
//const userInput = document.querySelector('.Rock');
//reset.addEventListener('click');

const playerSelection = userInput
const computerSelection = computerPlay()

// Se the play in the console for vertification
console.log("You picked " + playerSelection + " and the computer choose " + computerSelection)
console.log(playRound(playerSelection, computerSelection))
}

console.log(game())



// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    alert(button.id);
  });
});