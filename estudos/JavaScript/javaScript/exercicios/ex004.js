var prompt = require("prompt-sync")();

// Calculo Fatorial

console.log("\n----------FATORIAL DE UM NÚMERO----------\n");

function CalcularFatorial(numero) {
    let resultado = numero;
    for (i = numero - 1; i >= 1; i--) {
        resultado = resultado * i;
    }
    return resultado;
}

function ExibirCalculo(numero) {
    let mensagem = `${numero}`;
    for (i = numero - 1; i >= 1; i--) {
        mensagem += ` x ${i}`;
    }
    return mensagem;
}

var n = prompt("Informe um número: ");
var nf = CalcularFatorial(n);
var calc = ExibirCalculo(n);
console.log(`\n-----CALCULANDO ${n}!-----\n`);

console.log(`${calc} = ${nf}\n`);