#!/usr/bin/env node
import inquirer from "inquirer";
// 1st. computer will generate a random number
// 2nd. user input for guessing number
// 3rd. compair user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number Between 01 to 06:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congrats you have won");
}
else {
    console.log("Sorry! you have lose");
}
