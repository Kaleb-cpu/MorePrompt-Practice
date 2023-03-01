const billTotal = 40;
const tipRate = 0.18;

// Refactor the following code into a function so that it:
// 1. accepts subTotal and tipRate as parameters;
// 2. returns the billTotal, tipPercentage and tip as a complete sentence;
// 3. logs the returned sentence to the console, from outside the function.

const tip = billTotal * tipRate;
const tipPercentage = `${tipRate * 100}%`

// This console log should log the returned value from outside the function
console.log(`${tipPercentage} tip on $${billTotal} is $${tip}.`);