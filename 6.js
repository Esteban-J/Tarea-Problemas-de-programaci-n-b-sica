const prompt = require("prompt-sync")({ sigint: true });
let number;

let isValidInput = false;

while (!isValidInput) {
    number = prompt("Introduce un número >> ");
    isValidInput = !isNaN(number);
    if (!isValidInput) {
        console.log("Por favor, introduce un número.");
    }
}

let n = 1
while(n <= number){
    console.log(n);
    n++;
}
