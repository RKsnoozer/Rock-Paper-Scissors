function computerPlay() {
    let hand = ""
    result = Math.floor(Math.random() * 3);
    switch(result) {
        case 0:
            hand = "rock";
            break;
        case 1:
            hand = "paper";
            break;
        case 2:
            hand = "scissors";
            break;
    }
    return hand;
}

function playRound(playerSelection, computerSelection) {
    win = false
    let result = "";
    switch(computerSelection) {
        case "rock":
            switch(playerSelection) {
                case "rock":
                    result = "Both Rock, Draw!";
                    break;
                case "paper":
                    result = "You Win, Paper Beats Rock";
                    win = true
                    break;
                case "scissors":
                    result = "You Lose, Rock Beats Scissors";
                    break;
            }
            break;
        case "paper":
            switch(playerSelection) {
                case "rock":
                    result = "You Lose, Paper Beats Rock";
                    break;
                case "paper":
                    result = "Both Paper, Draw!";
                    break;
                case "scissors":
                    result = "You Win, Scissors Beats Paper";
                    win = true
                    break;
            }
            break;
        case "scissors":
            switch(playerSelection) {
                case "rock":
                    result = "You Win, Rock Beats Paper";
                    win = true
                    break;
                case "paper":
                    result = "You Lose, Scissors Beats Paper";
                    break;
                case "scissors":
                    result = "Both Scissors, Draw";
                    break;
            }
            break;
    }
    return(result, win);
}

function singleGame(playerHand) {
    playerHand = playerHand.toLowerCase()
    Ai = computerPlay();
    result = playRound(playerHand, Ai);
    console.log(result);
    return(winCount)
}

function BestOf5(playerHand) {
    i = 0;
    winCount = 0;
    while (i < 5) {
        i++;
        if (singleGame(playerHand) = true) {
            winCount++;
        }
    }
    if (winCount > 2) {
        console.log("You won the best of 5, winning ", winCount, " of the games");
    } else {
        console.log("You lost the best of 5, only winning ", winCount, " of the games");
    }
}