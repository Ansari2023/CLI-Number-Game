#!/usr/bin/evn node
import inquirer from "inquirer";
// 1st. computer will generate a random number
// 2nd. user input for guessing number
// 3rd. compair user input with computer generated number and show result
const randomNumber = 15;
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number: ",
    },
]);
console.log(answers);
