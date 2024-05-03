const prompt = require("prompt-sync")({sigint:true});

let word = prompt("Introdusca una palabra >> ");

for (let i = 0, j = ""; i < 5; i++, j += "\t"){
    console.log(j + word)
} 