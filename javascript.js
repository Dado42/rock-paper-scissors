function computerPlay(){
    let num = Math.floor((Math.random()*3)+1);
    let choice = "";

    switch(num){
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // 0 - Draw
    // 1 - L P/R
    // 2 - W R/S
    // 3 - W P/R
    // 4 - L S/P
    // 5 - L R/S
    // 6 - W S/P

    if(playerSelection == computerSelection){
        return 0;
    }
    
    switch(playerSelection){
        case "rock":
            if(computerSelection == "paper"){
                return 1;
            }
            return 2;
        case "paper":
            if(computerSelection == "rock"){
                return 3;
            }
            return 4;
        case "scissors":
            if(computerSelection == "rock"){
                return 5;
            }
            return 6;
    }

}

function capitalize(string){
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getMessage(outcome, playerSelection){
    switch(outcome){
        case 0:
            return `It's a Draw! You both chose ${capitalize(playerSelection)}`;
        case 1:
            return "You Lose! Paper beats Rock";
        case 2:
            return "You Won! Rock beats Scissors";
        case 3:
            return "You Won! Paper beats Rock";
        case 4:
            return "You Lose! Scissors beats Paper";
        case 5:
            return "You Lose! Rock beast Scissors";
        case 6:
            return "You Won! Scissors beats Paper";
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let result = playRound(playerSelection,  computerPlay());
        if (result != 0){ //Not a draw, so someone scores a point
            if (result == 1 || result == 4 || result == 5){
                computerScore++;
            }
            else{
                playerScore++;
            }
        }
        console.log(getMessage(result, playerSelection));
    }

    if (playerScore == computerScore){
        return `You tied the game! You both scored ${playerScore} point${(playerScore == 1) ? "" : "s"}`;
    }
    else if(playerScore > computerScore){
        return `You won the game! You scored ${playerScore} point${(playerScore == 1) ? "" : "s"}`;
    }
    else{
        return `You lost the game! You scored ${playerScore} point${(playerScore == 1) ? "" : "s"}`;
    }
}

console.log(game());