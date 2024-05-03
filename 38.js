
//Referencia Chat GPT
// Implementación del algoritmo de ordenamiento Shell
function shellSort(arr) {
    const n = arr.length;

    // Inicializar el espacio entre los elementos comparados
    let gap = Math.floor(n / 2);

    // Continuar dividiendo el arreglo en subarreglos con un espacio cada vez más pequeño
    while (gap > 0) {
        // Realizar inserción directa para los subarreglos con el espacio gap
        for (let i = gap; i < n; i++) {
            const temp = arr[i];
            let j = i;

            // Mover los elementos hacia adelante mientras sean mayores que el elemento temporal
            while (j >= gap && arr[j - gap][0] > temp[0]) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            // Insertar el elemento temporal en su posición correcta
            arr[j] = temp;
        }

        // Reducir el espacio entre los elementos comparados
        gap = Math.floor(gap / 2);
    }

    return arr;
}

// Ejemplo de uso

// Matriz de ejemplo
const matriz = [
    [7, 2, 3],
    [5, 4, 9],
    [1, 6, 8],
    [3, 0, 2]
];

// Ordenar la matriz por la primera columna usando Shell sort
shellSort(matriz);

// Imprimir la matriz ordenada
console.log("Matriz ordenada por la primera columna:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join("\t"));
}
