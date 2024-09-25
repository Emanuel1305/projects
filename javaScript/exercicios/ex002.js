var prompt = require('prompt-sync')();

// Calculadora Simples

console.log("\n----------CALCULADORA SIMPLES----------\n");

function Soma (numero1, numero2) {
    return numero1 + numero2;
}

function Subtracao (numero1, numero2) {
    return numero1 - numero2;
}

function Divisao (numero1, numero2) {
    return numero1 / numero2;
}

function Exponenciacao (numero1, numero2) {
    return numero1 ** numero2;
}

function Multiplicacao (numero1, numero2) {
    return numero1 * numero2;
}

const n1 = parseFloat(prompt("Numero 1: "));
const n2 = parseFloat(prompt("Numero 2: "));

console.log("\n-----CALCULOS-----\n\n[1] Soma\n[2] Subtração\n[3] Multiplação\n[4] Divisão\n[5] Exponenciação");

var resp = parseInt(prompt("Informe operação deseja realizar: "));

switch (resp) {
    case 1: 
        console.log(`\n${n1} + ${n2} = ${Soma(n1, n2)}`);
        break;
    case 2:
        console.log(`\n${n1} - ${n2} = ${Subtracao(n1, n2)}`);
        break;
    case 3: 
        console.log(`\n${n1} x ${n2} = ${Multiplicacao(n1, n2)}`);
        break;
    case 4:
        console.log(`\n${n1} / ${n2} = ${Divisao(n1, n2).toFixed(3)}`);
        break;
    case 5: 
        console.log(`\n${n1} ^ ${n2} = ${Exponenciacao(n1, n2)}`);
        break;
    default:
        console.log("O número informado é inválido");
        break;
}