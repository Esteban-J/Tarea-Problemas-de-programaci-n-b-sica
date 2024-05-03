const prompt = require("prompt-sync")({sigint:true});

let isValidInput = false;
let min = 0;
let max = 0;
let nummber;

for (let i = 0; i < 5; i++){
    let isValidInput = false;   
    while (!isValidInput) {
        number = prompt("Introduce un número >> ");
        isValidInput = !isNaN(number);
        if (!isValidInput) {
            console.log("Por favor, introduce un número válido.");
        }
    }
    if (i == 0)
        min = max = number;

    number > max ? max = number : number < min ? min = number : 0;
}

console.log("El número mayor fue: " + max + " y el menor fue: " + min);
