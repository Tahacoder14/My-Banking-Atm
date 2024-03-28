#! /usr/bin/env node
import inquirer from "inquirer";
let tahapin = 2256;
let tahaBalance = 20000;
//  Samad Input
let SamadPin = 1212;
let SamadBalance = 30000;
// Asad  Input
let asadPin = 1213;
let asadBalance = 35000;
// Sir Umer Khan Input
let UmerPin = 1214;
let UmerBalance = 999999;
console.log(`\n-----------------------------\n Taha Banking PVT LTD\n-----------------------------`);
console.log(`\n--------------------------------------------\nFor guide feel free to contact - 03191474976\n--------------------------------------------`);
console.log(`\nMy Pin Code Is ${tahapin}
\n  Samad's Pin Code Is ${SamadPin}
\n asad's Pin Code Is${asadPin}
\n Umer's Pin Code Is ${UmerPin}
`);
const pinInput = await inquirer.prompt([
    {
        message: "Please dial your pin code",
        type: "number",
        name: "getPin",
    },
]);
if (pinInput.getPin === tahapin) {
    console.log("--------------------\nYour Pin is Correct\n--------------------\nWelcome Taha\n--------------------");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select one of the below operation first",
            type: "list",
            choices: ["Withdrawer", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "Withdrawer") {
        let withdrawerAns = await inquirer.prompt([
            {
                name: "withdrawerOption",
                message: "Please select one of the option for transaction",
                type: "list",
                choices: ["500", "1000", "2000", "Other Amount"],
            },
        ]);
        if (withdrawerAns.withdrawerOption === "500") {
            tahaBalance -= withdrawerAns.withdrawerOption;
            console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${tahaBalance}
        \n----------------------------------`);
        }
        else if (withdrawerAns.withdrawerOption === "1000") {
            tahaBalance -= withdrawerAns.withdrawerOption;
            console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${tahaBalance}
        \n----------------------------------`);
        }
        else if (withdrawerAns.withdrawerOption === "2000") {
            tahaBalance -= withdrawerAns.withdrawerOption;
            console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${tahaBalance}
        \n----------------------------------`);
        }
        else if (withdrawerAns.withdrawerOption === "Other Amount") {
            let otherAmount = await inquirer.prompt([
                {
                    name: "manualAmount",
                    type: "number",
                    message: "Please enter the amount to make withdraw",
                },
            ]);
            if (otherAmount.manualAmount <= tahaBalance) {
                tahaBalance -= otherAmount.manualAmount;
                console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${otherAmount.manualAmount} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${tahaBalance}
        \n----------------------------------`);
            }
            else
                console.log(`\n------------------------------------------------------
      \nEnter amount is insufficent to make this transaction 
      \n\t Please deposit or withdraw sufficent amount 
      \n\t  Your account balance is ${tahaBalance}
      \n------------------------------------------------------`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`\n--------------------------------\t\n Your Account Balance is ${tahaBalance}\n--------------------------------`);
    }
}
// Transaction of Samad 
else if (pinInput.getPin === SamadPin) {
    console.log("--------------------\nYour Pin is Correct\n--------------------\nWelcome Samad\n--------------------");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select one of the below operation first",
            type: "list",
            choices: ["Withdrawer", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "Withdrawer") {
        let withdrawerAns = await inquirer.prompt([
            {
                name: "withdrawerOption",
                message: "Please select one of the option for transaction",
                type: "list",
                choices: ["500", "1000", "2000", "Other Amount"],
            },
        ]);
        if (withdrawerAns.withdrawerOption === "500") {
            SamadBalance -= withdrawerAns.withdrawerOption;
            console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${SamadBalance}
        \n----------------------------------`);
        }
        else if (withdrawerAns.withdrawerOption === "1000") {
            SamadBalance -= withdrawerAns.withdrawerOption;
            console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${SamadBalance}
        \n----------------------------------`);
        }
        else if (withdrawerAns.withdrawerOption === "2000") {
            SamadBalance -= withdrawerAns.withdrawerOption;
            console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${SamadBalance}
        \n----------------------------------`);
        }
        else if (withdrawerAns.withdrawerOption === "Other Amount") {
            let otherAmount = await inquirer.prompt([
                {
                    name: "manualAmount",
                    type: "number",
                    message: "Please enter the amount to make withdraw",
                },
            ]);
            if (otherAmount.manualAmount <= SamadBalance) {
                SamadBalance -= otherAmount.manualAmount;
                console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${otherAmount.manualAmount} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${SamadBalance}
        \n----------------------------------`);
            }
            else
                console.log(`\n------------------------------------------------------
      \nEnter amount is insufficent to make this transaction 
      \n\t Please deposit or withdraw sufficent amount 
      \n\t Your account balance is ${SamadBalance}
      \n------------------------------------------------------`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`\n--------------------------------\t\n Your Account Balance is ${SamadBalance}\n--------------------------------`);
    }
}
// Transaction of Asad
else if (pinInput.getPin === asadPin) {
    console.log("--------------------\nYour Pin is Correct\n--------------------\nWelcome Asad\n--------------------");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select one of the below operation first",
            type: "list",
            choices: ["Withdrawer", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "Withdrawer") {
        let withdrawerAns = await inquirer.prompt([
            {
                name: "withdrawerOption",
                message: "Please select one of the option for transaction",
                type: "list",
                choices: ["500", "1000", "2000", "Other Amount"],
            },
        ]);
        if (withdrawerAns.withdrawerOption === "500") {
            asadBalance -= withdrawerAns.withdrawerOption;
            console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${asadBalance}
        \n----------------------------------`);
        }
        else if (withdrawerAns.withdrawerOption === "1000") {
            asadBalance -= withdrawerAns.withdrawerOption;
            console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${asadBalance}
        \n----------------------------------`);
        }
        else if (withdrawerAns.withdrawerOption === "2000") {
            asadBalance -= withdrawerAns.withdrawerOption;
            console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${asadBalance}
        \n----------------------------------`);
        }
        else if (withdrawerAns.withdrawerOption === "Other Amount") {
            let otherAmount = await inquirer.prompt([
                {
                    name: "manualAmount",
                    type: "number",
                    message: "Please enter the amount to make withdraw",
                },
            ]);
            if (asadBalance >= otherAmount.manualAmount) {
                asadBalance -= otherAmount.manualAmount;
                console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${otherAmount.manualAmount} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${asadBalance}
        \n----------------------------------`);
            }
            else
                console.log(`\n------------------------------------------------------
      \nEnter amount is insufficent to make this transaction 
      \n\t Please deposit or withdraw sufficent amount 
      \n\t  Your account balance is ${asadBalance}
      \n------------------------------------------------------`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`\n--------------------------------\t\n Your Account Balance is ${asadBalance}\n--------------------------------`);
    }
}
// Transaction of Umer
else if (pinInput.getPin === UmerPin) {
    console.log("--------------------\nYour Pin is Correct\n--------------------\nWelcome Zia Khan\n--------------------");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select one of the below operation first",
            type: "list",
            choices: ["Withdrawer", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "Withdrawer") {
        let withdrawerAns = await inquirer.prompt([
            {
                name: "withdrawerOption",
                message: "Please select one of the option for transaction",
                type: "list",
                choices: ["500", "1000", "2000", "Other Amount"],
            },
        ]);
        if (withdrawerAns.withdrawerOption === "500") {
            UmerBalance -= withdrawerAns.withdrawerOption;
            console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${UmerBalance}
        \n----------------------------------`);
        }
        else if (withdrawerAns.withdrawerOption === "1000") {
            UmerBalance -= withdrawerAns.withdrawerOption;
            console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${UmerBalance}
        \n----------------------------------`);
        }
        else if (withdrawerAns.withdrawerOption === "2000") {
            UmerBalance -= withdrawerAns.withdrawerOption;
            console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${withdrawerAns.withdrawerOption} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${UmerBalance}
        \n----------------------------------`);
        }
        else if (withdrawerAns.withdrawerOption === "Other Amount") {
            let otherAmount = await inquirer.prompt([
                {
                    name: "manualAmount",
                    type: "number",
                    message: "Please enter the amount to make withdraw",
                },
            ]);
            if (otherAmount.manualAmount <= UmerBalance) {
                UmerBalance -= otherAmount.manualAmount;
                console.log(`\n----------------------------------
        \t\n **Withdraw Operation Succesful**
        \n----------------------------------
        \t\n     ${otherAmount.manualAmount} Witdraw from account 
        \n----------------------------------
        \t\n Your remaining balance is ${UmerBalance}
        \n----------------------------------`);
            }
            else
                console.log(`\n------------------------------------------------------
      \nEnter amount is insufficent to make this transaction 
      \n\t Please deposit or withdraw sufficent amount 
      \n\t  Your account balance is ${UmerBalance}
      \n------------------------------------------------------`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`\n--------------------------------\t\n Your Account Balance is ${UmerBalance}\n--------------------------------`);
    }
}
else {
    console.log("\n----------------\t\n Incorrect Pin\n----------------");
}
