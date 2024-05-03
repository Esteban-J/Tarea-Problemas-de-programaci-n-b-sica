let sum = 0;
let count = 0;

for(let i = 4; i <= 20; i++){
    if(i % 2 == 0){
        count++;
        sum += i;
        console.log(i);
    }
}

console.log("El número de multiplos de 2 fue: " + count);
console.log("La sumatoria de los pares es: " + sum);
