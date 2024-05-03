import factorial from './27.mjs';
import testPrime from './24.mjs';
import multiplyTable from './20.mjs';

import prompt from 'prompt-sync';

const promptSync = prompt({ sigint: true });

let numero = promptSync("Introduzca el número >> ");

try {
    console.log(factorial(numero));
    console.log(testPrime(numero));
    multiplyTable(numero);
} catch (e) {
    console.log(e);
}
