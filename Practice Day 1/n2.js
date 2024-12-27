const prompt = require("prompt-sync")();

let x = prompt("Enter a number : ");

if (x%2==0){
    console.log(`The input number ${x} is even`);
}
else{
    console.log(`The input number ${x} is odd`);
}


