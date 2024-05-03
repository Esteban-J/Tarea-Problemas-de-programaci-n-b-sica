const prompt = require("prompt-sync")({sigint:true});

const phrase = prompt("Introduzca una palabra >> ");

let count = 0;

for(const char of phrase.toLowerCase()){
    if(char === 'a'){
        count++;
    }
}

console.log("La cantidad de letras 'a' en la palabra es: " + count);
