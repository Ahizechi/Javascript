// Import the readline module to handle input/output in the terminal
const readline = require('readline');

// Create an interface for reading input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform arithmetic operations
function calculate(operation, num1, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        case '%':
            return num1 % num2;
        case '**':
            return Math.pow(num1, num2);
        case '//':
            return num2 !== 0 ? Math.floor(num1 / num2) : "Error: Division by zero";
        default:
            return "Error: Invalid operation";
    }
}

// Function to start the calculator
function startCalculator() {
    rl.question('Enter the first number: ', (input1) => {
        const num1 = parseFloat(input1);

        rl.question(`Enter an operation (+, -, *, /, %, **, //): `, (operation) => {

            rl.question('Enter the second number: ', (input2) => {
                const num2 = parseFloat(input2);

                const result = calculate(operation, num1, num2);
                console.log(`Result: ${result}`);

                rl.question('Do you want to perform another calculation? (yes/no): ', (answer) => {
                    if (answer.toLowerCase() === 'yes') {
                        startCalculator();
                    } else {
                        console.log('Goodbye!');
                        rl.close();
                    }
                });
            });
        });
    });
}

// Start the calculator
startCalculator();
