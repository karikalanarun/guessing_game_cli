#!/usr/bin/env node
const readlineSync = require("readline-sync")

function genrateANumberBW1to100() {
    return Math.floor(Math.random() * 100 + 1)
}

let generatedNumber = genrateANumberBW1to100()

console.log("I have generated a number between 1 to 100, can u guess?")

while (true) {
    var number = parseInt(readlineSync.question('Guess the number: '), 10);

    if (number > generatedNumber) {
        console.log(number, " is bigger than my guessing")
    } else if (number < generatedNumber) {
        console.log(number, " is smaller than my guessing")
    } else {
        console.log("Yay!!! you have guessed it correctly")
        break;
    }
}

