const prompt = require("prompt-sync")({sigint:true});

let numero1 = prompt("Introdusca el primer numero >> "); 
let numero2 = prompt("Introdusca el segundo numero >> ");

console.log("Selecciona la operación que deseas realizar:");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicación");
console.log("4. División");

let num1 = parseFloat(numero1);
let num2 = parseFloat(numero2);

let opcion = prompt(">> ")
switch (parseInt(opcion)) {
    case 1:
        console.log(`La suma de ${num1} y ${num2} es: ${num1 + num2}`);
        break;
    case 2:
        console.log(`La resta de ${num1} y ${num2} es: ${num1 - num2}`);
        break;
    case 3:
        console.log(`La multiplicación de ${num1} y ${num2} es: ${num1 * num2}`);
        break;
    case 4:
        if (num2 === 0) {
            console.log("No se puede dividir por cero.");
        } else {
            console.log(`La división de ${num1} y ${num2} es: ${num1 / num2}`);
        }
        break;
    default:
        console.log("Opción no válida.");
        break;
}
