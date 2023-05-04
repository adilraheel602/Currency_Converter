#! /usr/bin/env node
import figlet from "figlet";
import chalk from "chalk";
import inquirer from "inquirer";
const select = async () => {
    const input = await inquirer.prompt([
        {
            type: "number",
            name: "operation",
            message: "Enter 1 if you want to perform another conversion else press 2:",
        },
    ]);
    if (input.operation == 1) {
        await welcome();
    }
    else {
        console.log(chalk.bgMagentaBright("GoodBye! See you next time."));
    }
};
const welcome = async () => {
    console.log(figlet.textSync('Currency Converter!'));
    const input = await inquirer.prompt([
        {
            type: "number",
            name: "own_balance",
            message: (chalk.bgCyanBright("Enter amount in rupees to convert in other currency:")),
        },
        {
            type: "list",
            name: "to_convert",
            choices: ["USD", "Riyal", "Dirham", "CAD", "Yuan"],
        }
    ]);
    let result = 0;
    if (input.to_convert === "USD") {
        result = input.own_balance / 283;
        console.log(chalk.bgMagentaBright(`Your balance in USD is: ${result}$`));
    }
    else if (input.to_convert === "Riyal") {
        result = input.own_balance / 75;
        console.log(chalk.bgMagentaBright(`Your balance in Riyal is: ${result} Riyal`));
    }
    else if (input.to_convert === "Dirham") {
        result = input.own_balance / 77;
        console.log(chalk.bgMagentaBright(`Your balance in Dirham is: ${result} Dirham`));
    }
    else if (input.to_convert === "CAD") {
        result = input.own_balance / 209;
        console.log(chalk.bgMagentaBright(`Your balance in CAD is: ${result} CAD`));
    }
    else if (input.to_convert === "Yuan") {
        result = input.own_balance / 41;
        console.log(chalk.bgMagentaBright(`Your balance in Yuan is: ${result} Yuan`));
    }
    else {
        console.log(chalk.bgMagentaBright("You haven't enter details correctly"));
    }
    select();
};
await welcome();
