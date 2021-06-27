function computerPlay() {
    result = Math.floor(Math.random() * 3);
    switch(result) {
        case 0:
            let hand = "rock";
            break;
        case 1:
            let hand = "paper";
            break;
        case 2:
            let hand = "scissors";
            break;
    }
    return hand;
}

function playRound(playerSelection, computerSelection) {
    switch(computerSelection) {
        case "rock":
            switch(playerSelection) {
                case "rock":
                    let result = "Both Rock, Draw!"
                    break;
                case "paper":
                    let result = "You Win, Paper Beats Rock"
                    break;
                case "scissors":
                    let result = "You Lose, Rock Beats Scissors"
                    break;
            }
            break;
        case "paper":
            switch(playerSelection) {
                case "rock":
                    let result = "You Lose, Paper Beats Rock"
                    break;
                case "paper":
                    let result = "Both Paper, Draw!"
                    break;
                case "scissors":
                    let result = "You Win, Scissors Beats Paper"
                    break;
            }
            break;
        case "scissors":
            switch(playerSelection) {
                case "rock":
                    let result = "You Win, Rock Beats Paper"
                    break;
                case "paper":
                    let result = "You Lose, Scissors Beats Paper"
                    break;
                case "scissors":
                    let result = "Both Scissors, Draw"
                    break;
            }
            break;
    }
    return(result);
}