const califList = require('./33')
const prompt = require("prompt-sync")({sigint:true});

console.log("Que calficación desea ver?");
console.log("Mateáticas [1]\n" +
            "Geografia  [2]\n" +
            "Hitoria    [3]\n" +
            "Algebra    [4]\n" +
            "Química    [5]\n" +
            "Física     [6}\n" +
            "Programación [7]\n" +
            "Ajedréz    [8]\n" +
            "Economía   [9]\n" +
            "Filosofía  [10]\n")
let index = prompt(" >> ");

console.log("La calificación es: " + califList.califList[index]);
