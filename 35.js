//matriz normal
var matriz = [[],[],[],[]];

for (let i = 0; i < 4; i++){
    for (let j = 0; j < 5; j++){
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        matriz[i][j] = numeroAleatorio;
    }
}

for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join("\t"));
}


