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
    return hand
}

function playRound(playerSelection, computerSelection) {
    return("")
}