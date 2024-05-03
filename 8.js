const prompt = require("prompt-sync")({sigint : true})

input = prompt("Introduce N o S >> ");

while(input != 'N' && input != 'S'){
    console.log("Error, entrada no valida");
    input = prompt("Introduce N o S >> ");
}