let counter = 0;
for (let i = 0; i <= 100; i++){
    let dize1 = Math.floor(Math.random() * 7) + 1;
    let dize2 = Math.floor(Math.random() * 7) + 1;
    if(dize1 + dize2 === 10)
        counter++;
}

console.log(`Las veces que resulto en 10 fueron ${counter}`);