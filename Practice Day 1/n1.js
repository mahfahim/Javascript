const prompt = require("prompt-sync")();

let result = prompt("Enter your marks: ")

if (result < 0) {
  console.log("failed");
} 
else if (result >= 0 && result < 40) {
  console.log("tumi C grade paico");
} 
else if (result >= 40 && result < 60) {
  console.log("tumi B grade paico");
} 
else if (result >= 60 && result < 70) {
  console.log("tumi A grade paico");
} 
else if (result >=80 ) {
  console.log("tumi A+ grade paico");
} 
else {
  console.log("invalid");
}

