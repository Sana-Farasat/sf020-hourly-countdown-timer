#! /usr/bin/env node
//Shebang
import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
console.log(chalk.yellowBright('\n\n\tThis Is Hourly CountDown Timer But You Have To Give \n\tYour Allotted Time In Seconds Like 1 Hour is equal to 3600 Seconds...'));
let input = await inquirer.prompt({
    name: "user",
    type: "number",
    message: chalk.yellowBright("\n\n\t\tPlease enter number in seconds"),
    validate: function (number) {
        if (isNaN(number)) {
            return chalk.redBright("\n\n\t\tPlease enter a valid number");
        }
        return true; // Indicates that validation passed
    }
});
let userInput = input.user;
function startTime(value) {
    const initialTime = new Date().setSeconds(new Date().getSeconds() + (value + 2));
    const intervalTime = new Date(initialTime);
    const clear = setInterval(() => {
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(intervalTime, currentTime);
        if (timeDifference <= 0) {
            clearInterval(clear); // Clear the interval to stop the countdown
            //console.log(chalk.greenBright("\n\t\t The allotted time has elapsed!"));  
            //process.exit() To Terminate the process
        }
        const hours = Math.floor(timeDifference / 3600);
        const minutes = Math.floor(timeDifference / 60);
        const seconds = Math.floor(timeDifference % 60);
        console.log(chalk.greenBright(`\n\t\t\t\t  ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`));
    }, 1000);
}
console.clear(); //To clear the screen
console.log(chalk.yellowBright('\n\t\t' + '*'.repeat(50)));
console.log(chalk.yellowBright('\n\t\t' + '*****************COUNTDOWN TIMER******************'));
console.log(chalk.yellowBright('\n\t\t' + '*'.repeat(50)));
startTime(userInput); //Calling the function
