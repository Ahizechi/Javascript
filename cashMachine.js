// Import the readline-sync module to handle input/output in the terminal
const readlineSync = require('readline-sync');

// Initial account balance (hardcoded)
let balance = 1000.00;

// Function to check balance
function checkBalance() {
    console.log(`Your current balance is: $${balance.toFixed(2)}`);
}

// Function to deposit money
function deposit() {
    const amount = parseFloat(readlineSync.question('Enter the amount to deposit: $'));
    if (isNaN(amount) || amount <= 0) {
        console.log("Error: Please enter a valid amount.");
    } else {
        balance += amount;
        console.log(`You have successfully deposited $${amount.toFixed(2)}.`);
        checkBalance();
    }
}

// Function to withdraw money
function withdraw() {
    const amount = parseFloat(readlineSync.question('Enter the amount to withdraw: $'));
    if (isNaN(amount) || amount <= 0) {
        console.log("Error: Please enter a valid amount.");
    } else if (amount > balance) {
        console.log("Error: Insufficient funds. Unable to withdraw.");
    } else {
        balance -= amount;
        console.log(`You have successfully withdrawn $${amount.toFixed(2)}.`);
        checkBalance();
    }
}

// Function to start the ATM simulator
function startATM() {
    while (true) {
        console.log("\nWelcome to the ATM Simulator!");
        console.log("1. Check Balance");
        console.log("2. Deposit Money");
        console.log("3. Withdraw Money");
        console.log("4. Exit");

        const choice = readlineSync.question('Please choose an option (1-4): ');

        switch (choice) {
            case '1':
                checkBalance();
                break;
            case '2':
                deposit();
                break;
            case '3':
                withdraw();
                break;
            case '4':
                console.log("Thank you for using the ATM Simulator. Goodbye!");
                return;
            default:
                console.log("Error: Invalid option. Please choose a valid option (1-4).");
        }

        const anotherTransaction = readlineSync.question('Do you want to perform another transaction? (yes/no): ');
        if (anotherTransaction.toLowerCase() !== 'yes') {
            console.log("Thank you for using the ATM Simulator. Goodbye!");
            break;
        }
    }
}

// Start the ATM simulator
startATM();
