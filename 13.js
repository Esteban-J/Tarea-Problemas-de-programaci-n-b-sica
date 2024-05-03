const prompt = require("prompt-sync")({sigint:true});

let counter = 0;

for (let i = 1; i <= 100; i++){
    if (i % 2 == 0 || i % 3 == 0){
        console.log(i);
        counter++   
    }
}

console.log("La cantidad de multiplos de 2 o de 3 entre 1 al 100 es: " + counter)

