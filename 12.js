let even = 0;
let uneven = 0;
for (let i = 1; i <= 100; i++){
    i % 2 == 0 ? even += i : uneven += i;
    console.log(i);
}

console.log("<<<< Suma de número pares: " + even + " >>>>");
console.log("<<<< Suma de número inpares: " + uneven + " >>>>");