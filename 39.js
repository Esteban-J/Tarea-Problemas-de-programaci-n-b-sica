const table = [];

let counter = 1;
for (let i = 0; i < 3; i++) {
    table[i] = [];
    for (let j = 0; j < 4; j++) {
        table[i][j] = [];
        for (let k = 0; k < 5; k++) {
            table[i][j][k] = counter++;
        }
    }
}

for (let i = 0; i < 3; i++) {
    console.log(`Página ${i + 1}:`);
    for (let j = 0; j < 4; j++) {
        console.log(table[i][j].join("\t"));
    }
    console.log();
}

