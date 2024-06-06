#! /usr/bin/env/node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.56,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter your from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter your to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amounts",
        message: "Enter your Amount ",
        type: " number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amounts;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);
console.log(toAmount);
console.log(amount);
