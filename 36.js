//matriz normal
var matriz = [[],[],[],[]];

for (let i = 0; i < 4; i++){
    for (let j = 0; j < 5; j++){
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        matriz[i][j] = numeroAleatorio;
    }
}

//matriz transpuesta
var matrizT = [[],[],[],[],[]];

for (let i = 0; i < 5; i++){
    for (let j = 0; j < 4; j++){
        matrizT[i][j] = matriz[j][i];
        if(i == 3){
            matrizT[i+1][j] = matriz[j][i+1];
        }
    }
}

console.log("-----------Matriz normal--------------");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join("\t"));
}
console.log("-----------Matriz transpuesta--------------");
for (let i = 0; i < matrizT.length; i++) {
    console.log(matrizT[i].join("\t"));
}
