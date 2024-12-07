let prompt = require("prompt-sync")();

// Funções

function soma(numero1, numero2) {
    return numero1 + numero2;
}

var n1 = 5;
var n2 = 6;
var sum = soma(n1, n2);

console.log(`${n1} + ${n2} = ${sum}`);