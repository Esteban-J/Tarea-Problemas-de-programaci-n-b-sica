const prompt = require("prompt-sync")({sigint:true});

let isValidInput = false;
let nummber;
while (!isValidInput) {
    number = prompt("Introduce un número >> ");
    isValidInput = !isNaN(number);
    if (!isValidInput) {
        console.log("Por favor, introduce un número válido.");
    }
}
let counter = 0;

for (let i = 1; i <= number; i++){
    if (i % 3 == 0){
        console.log(i);
        counter++   
    }
}

console.log("La cantidad de multiplos de 3 entre 1 y el número introducido es: " + counter)

