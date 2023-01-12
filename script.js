// Main game function
function playBlackjack() {
    // Deal player a random number between 4 and 21
    let playerHand = getRandomNumber(4, 21);
    console.log(`Player's hand: ${playerHand}`);

    // Check if player has 21
    if (playerHand === 21) {
        console.log(`Player wins!`);
        return;
    }

    // Deal dealer a random number between 2 and 11
    let dealerHand = getRandomNumber(2, 11);
    console.log(`Dealer's hand: ${dealerHand}`);

    // Loop for player's turn
    while (true) {
        // Ask player if they want to hit or stay
        let playerChoice = prompt(`Do you want to hit or stay?`);

        // If player chooses to hit, add a random number between 2 and 11 to their hand
        if (playerChoice === "hit") {
            playerHand += getRandomNumber(2, 11);
            console.log(`Player's hand: ${playerHand}`);

            // Check if player has gone over 21
            if (playerHand > 21) {
                console.log(`Player loses.`);
                return;
            }
        } else if (playerChoice === "stay") {
            // If player chooses to stay, end player's turn
            break;
        }
    }

    // Loop for dealer's turn
    while (dealerHand < 17) {
        // Add a random number between 2 and 11 to dealer's hand
        dealerHand += getRandomNumber(2, 11);
        console.log(`Dealer's hand: ${dealerHand}`);

        // Check if dealer has gone over 21
        if (dealerHand > 21) {
            console.log(`Dealer loses.`);
            return;
        }
    }

    // Compare hands to 21 and determine winner
    if (Math.abs(21 - playerHand) < Math.abs(21 - dealerHand)) {
        console.log("Player wins!");
    } else if (Math.abs(21 - playerHand) > Math.abs(21 - dealerHand)) {
        console.log(`Dealer wins.`);
    } else {
        console.log(`It's a tie.`);
    }
}

// Function to generate a random number between two given numbers (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

playBlackjack()
