let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;



function generateTarget(){
   var randomNumber = Math.floor(Math.random() * 9) + 1;
   return randomNumber;


function compareGuesses (){
    var humanGuess;
    var computerGuess;
   
    if(Math.abs(humanGuess - randomNumber) > Math.abs(computerGuess - randomNumber)){
        return true;
    } else if (Math.abs(humanGuess - randomNumber) < Math.abs(computerGuess - randomNumber)){
        return false;
    } else {
        return true;
    }
}
}

function updateScore(str) {
    switch (str) {
     case 'human':
         humanScore ++;
     case 'computer':
         computerScore ++;
    }
 }


 function advanceRound(){
    currentRoundNumber ++;
}