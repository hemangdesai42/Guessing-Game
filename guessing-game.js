const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

askRange();

function askGuess() {
    rl.question("Enter a guess number: ", (answer) => {
        const guess = Number(answer);
        if (checkGuess(guess)) {
            console.log("YOU WIN!")
            rl.close();
        } else {
            askGuess();
        }
    })
}

let secretNumber;

function askRange() {
    rl.question("Enter a max number: ", (max) => {
        rl.question("Enter a min number: ", (min) => {
            console.log(`I'm thinking of a number between ${min} and ${max}...`)
            randomInRange(Number(min), Number(max));
            askGuess();
        });
    });
}

function randomInRange(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        secretNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return secretNumber;
};

function checkGuess(number) {
    if (number > secretNumber) {
        console.log("Too high.")
        return false;
    } else if (number < secretNumber) {
        console.log("Too low.");
        return false;
    } else if (number === secretNumber) {
        console.log("Correct!");
        return true;
    }
}
