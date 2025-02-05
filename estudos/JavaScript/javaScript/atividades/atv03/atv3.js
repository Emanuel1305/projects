let prompt = require("prompt-sync")();

// Calculadora usando IF e SWITCH

console.log("\n----------CALCULADORA SIMPLES----------");

console.log(`
Selecione a Operação pelo seu número correspondente:
1(Soma) - 2(Subtração) - 3(Multiplicação) - 4(Divisão)`
);

var opc = parseInt(prompt("Operação selecionada: "));
console.log();
var n1 = parseInt(prompt("Primeiro número: "));
var n2 = parseInt(prompt("Segundo número: "));
console.log("\n-----Operação-----\n");

if (opc == 1) {
    console.log(`${n1} + ${n2} = ${n1+n2}`);
} else if (opc == 2) {
    console.log(`${n1} - ${n2} = ${n1-n2}`);
} else if (opc == 3) {
    console.log(`${n1} x ${n2} = ${n1*n2}`);
} else if (opc == 4) {
    console.log(`${n1} / ${n2} = ${n1/n2}`);
} else {
    console.log("O número informado não representa nenhuma operação.");
}

console.log();