const prompt = require("prompt-sync")({ sigint: true });

let Inumber;
let isValidInput = false;

while (!isValidInput) {
    Inumber = prompt("Introduce un número >> ");
    isValidInput = !isNaN(Inumber);
    if (!isValidInput) {
        console.log("Por favor, introduce un número válido.");
    }
}

const castedNumber = Number(Inumber);

console.log(castedNumber > 0 ? "<<<< El número introducido es positivo >>>>" : 
                            "<<<< El número introducido es negativo o cero >>>>");

