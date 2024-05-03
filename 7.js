const prompt = require("prompt-sync")({ sigint: true });

let phrase = "";
let counter = 0;
while (phrase != "listo"){
    counter++;
    phrase = prompt("Introduce una frase o \"listo\" para terminar >> "); 
}

console.log("<<<< Número de frases introducidas: " + (counter - 1) + " >>>>");

