let prompt = require('prompt-sync')();

// Operadores

console.log("");
var n1 = prompt("Primeiro Numero: ");
var n2 = prompt("Segundo Numero: ");

var sum = n1 + n2;
var sub = n1 - n2;
var mult = n1 * n2;
var divs = n1 / n2;

console.log(`
    ${n1} + ${n2} = ${sum}
    ${n1} - ${n2} = ${sub}
    ${n1} x ${n2} = ${mult}
    ${n1} / ${n2} = ${divs}\n`
);