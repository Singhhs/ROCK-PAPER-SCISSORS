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
const playerSelection = userInput
const computerSelection = computerPlay()
console.log("You picked " + playerSelection + " and the computer choose " + computerSelection)
console.log(playRound(playerSelection, computerSelection))
}

console.log(game())
