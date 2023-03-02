const billTotal = 40;

// defined tipRate as default on the function
// const tipRate = 0.18;

const calculateTip = function(billTotal, tipRate = 0.20){
  const tip = billTotal * tipRate;
  const tipPercentage = `${tipRate * 100}%`;

  return `${tipPercentage} tip on ${billTotal} is ${tip}`;

};
// Refactor the following code into a function so that it:
// 1. accepts subTotal and tipRate as parameters;
// 2. returns the billTotal, tipPercentage and tip as a complete sentence;
// 3. logs the returned sentence to the console, from outside the function.


// This console log should log the returned value from outside the function
const billTotal1 = window.prompt();
const tipAmount = calculateTip(billTotal1)
// console.log(`${tipPercentage} tip on ${billTotal1} is ${tip}.`);
console.log(tipAmount);