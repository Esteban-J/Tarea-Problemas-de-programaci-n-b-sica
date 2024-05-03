const prompt = require("prompt-sync")({sigint:true});

let califList = [];
let calSum = 0;
for (let i = 0; i < 10; i++){
    cal = prompt(`Ingrese la calificación ${i + 1} >> `);
    califList[i] = cal;
    calSum += Number(cal); 
}

console.log(`La media de las calificaciones fue: ${calSum / 10}`);

module.exports.califList = califList;