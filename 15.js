const prompt = require("prompt-sync")({sigint:true});

let number1;
let number2;
let isValidInput1 = false;
let isValidInput2 = false;

while (!isValidInput1 && !isValidInput2) {
    number1 = prompt("Introduce el primer número >> ");
    isValidInput1 = !isNaN(number1);
    if (!isValidInput1){
        console.log("Introdusca un número valido");
        continue;
    }
    number2 = prompt("Introdusca el segundo número >> ")
    isValidInput2 = !isNaN(number2);
    if (!isValidInput2){
        console.log("Introdusca un número valido");
        continue;
    }
}

let menor = 0; 
let mayor = 0;

if(number1 > number2){
    menor = number2;
    mayor = number1;
}
else{
    menor = number1;
    mayor = number2;
}

let counterN = 0;
let counterEven = 0;
let sumUneven = 0;
while(menor <= mayor){
    console.log(menor);
    if(menor % 2 == 0)
        counterEven++;
    else
        sumUneven += Number(menor);
    menor++;
    counterN++; 
}

console.log("El cantidad de numeros fue:" + counterN);
console.log("El número de pares es: " + counterEven);
console.log("La suma de los impares es: " + sumUneven);
