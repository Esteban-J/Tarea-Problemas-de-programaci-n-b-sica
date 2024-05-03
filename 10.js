const prompt = require("prompt-sync")({sigint : true});

let isValidInput = false;
let number;
while (!isValidInput) {
    number = prompt("Introduce un número >> ");
    isValidInput = !isNaN(number);
    if (!isValidInput) {
        console.log("Por favor, introduce un número válido.");
    }
}

if (number % 2 == 0)
    console.log("El número introducido es par");
else
    console.log("El número introducido no es par");