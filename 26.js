//Referencia Chat GPT

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce una frase: ', (frase) => {
  // Calcula el ancho de la consola
  const anchoConsola = process.stdout.columns;

  // Calcula cuántos espacios en blanco se necesitan antes de la frase
  const espaciosEnBlanco = Math.floor((anchoConsola - frase.length) / 2);

  // Crea una cadena con los espacios en blanco necesarios antes de la frase
  const espacios = ' '.repeat(espaciosEnBlanco);

  // Imprime la frase centrada
  console.log(espacios + frase);

  rl.close();
});
