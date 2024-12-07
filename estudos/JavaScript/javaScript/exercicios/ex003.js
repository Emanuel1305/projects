var prompt = require('prompt-sync')();

// Impar ou Par

console.log("\n----------VERIFICAR SE O NÚMERO É PAR OU ÍMPAR----------\n");

function verficarParImpar(numero) {
    if (numero % 2 == 0) {
        return "par";
    } else {
        return "impar";
    }
}

var n = prompt("Informe um número: ");
var result = verficarParImpar(n);

console.log(`O número informado é ${result}.`);