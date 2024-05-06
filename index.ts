#! /usr/bin/env node

import inquirer from "inquirer";
console.log("Welcome 👋🏻 to my Number Guessing Game");

const randomNumber = Math.floor(Math.random() *6 + 1 )

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Guess a number please between 1-6",
  },
]);

//Conditions

if (answer.userGuessedNumber === randomNumber) {
    console.log("🎉Congratulations❕ You Guessed correct number🎉");
    
}
else{
    console.log("Oops❗ you Guessed wrong number🤦");
    
}
//FOR THE TEACHER :
// this project is only made by arisha Ghaffar.
//me and my sister both uses the same laptop thats why 
//whenever we upload our projects on github it shows that this is made by both of us.