const prompt = require("prompt-sync")();

// Taking array input
let arrayInput = prompt("").split(" ").map(Number);
console.log("Array:", arrayInput);

// Taking a single number
let numberInput = Number(prompt("Enter a number:"));
console.log("Number:", numberInput);
