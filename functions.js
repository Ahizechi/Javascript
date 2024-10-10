function addNumbers(a, b) {

    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both parameters must be numbers.");
    }
    return a + b;
}

try {
    const a = Number(prompt("Enter the first number: "))
    const b = Number(prompt("Enter the second number: "))
    const result = addNumbers(a, b);
    console.log(`The sum of the numbers is: ${result}`);
} catch (error) {
    console.error(error.message);
}
