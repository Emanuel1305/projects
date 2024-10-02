let prompt = require("prompt-sync")();

// Funções

function formatarReais (valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calcularIR (valorSalarioBruto) {
    if (valorSalarioBruto <= 1250) {
        return 0;
    } else if (valorSalarioBruto <= 2500) {
        return salarioBruto * 0.05;
    } else if (valorSalarioBruto <= 4500) {
        return salarioBruto * 0.10;
    } else if (valorSalarioBruto > 4500) {
        return salarioBruto * 0.20;
    }
}

function calcularINSS (valorSalarioBruto) {
    return valorSalarioBruto * 0.10;
}

function calcularFGTS (valorSalarioBruto) {
    return valorSalarioBruto * 0.11;
}

function calcularPensaoAlimenticia (valorSalarioBruto) {
    return valorSalarioBruto * 0.20;
}

// Exercicio 02

console.log("\n----------Calcular salário liquido----------\n");

var salarioBruto = parseFloat(prompt("Informe o seu salário bruto: "));
var IR = calcularIR(salarioBruto);
var INSS = calcularINSS(salarioBruto);
var FGTS = calcularFGTS(salarioBruto);
var alimentante;
var pensao;

do {
    alimentante = prompt("Paga pensão alimentícia [s] Sim ou [n] Não: ")
} while (alimentante !== "s" && alimentante !== "n");

if (alimentante === "s") {
    pensao = calcularPensaoAlimenticia(salarioBruto);
} else {
    pensao = 0;
}

var descontos = IR + INSS + FGTS + pensao;
var salarioLiquido = salarioBruto - descontos;

console.log(`
    Salário Bruto           : ${formatarReais(salarioBruto)}
    (-) IR (5%)             : ${formatarReais(IR)}
    (-) INSS (10%)          : ${formatarReais(INSS)}
    FGTS (11%)              : ${formatarReais(FGTS)}
    Pensão (20%)            : ${formatarReais(pensao)}
    Total de descontos      : ${formatarReais(descontos)}
    Salário Liquido         : ${formatarReais(salarioLiquido)}
`);

