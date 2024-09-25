var prompt = require('prompt-sync')();

// 1- Crie um array que receba 20 nomes de carros e imprima na tela utilizando FOR.

console.log("\n----------Receber Nome de 20 Carros----------\n");

var nomes = [];
var msg = "";

for (i=0; i<20; i++) {
    nomes[i] = prompt(`Nome do ${i + 1}° Carro: `);
}

for (i=0; i<nomes.length; i++) {
    msg += " | " + nomes[i]; 
}

console.log(`\n-----Carros-----\n\n${msg}`);

// 2- Crie um um array que receba 10 números utilizando prompt, após isso crie uma função que imprima os números na tela na ordem em que foram inseridos e em ordem crescente utilizando o método sort.

console.log("\n----------Receber 10 Números----------\n");

var numeros = [];
var msg2 = ``;

for (i=0; i<10; i++) {
    numeros[i] = prompt(`${i + 1}° Número: `);
}

numeros = numeros.map(num => parseInt(num));

function imprimirNumeros(arr) {
    msg2 = ``;
    for (i=0; i<arr.length; i++) {
        msg2 += ` | ` + arr[i];
    }
    return msg2;
}

function imprimirNumerosOrdem(arr) {
    msg2 = ``;
    arr.sort((a, b) => a - b);
    for (i=0; i<arr.length; i++) {
        msg2 += ` | ` + arr[i];
    }
    return msg2;
}

console.log(`\n-----Números-----\n` + imprimirNumeros(numeros));
msg2 = ``;
console.log(`\n-----Números em Ordem Crescente-----\n` + imprimirNumerosOrdem(numeros));

// 3- Crie uma função que receba 3 números inteiros retorne a média, utilize variáveis para armazenar os números e prompt para receber os dados. 

console.log("\n----------Receber Números e Retornar a Média----------\n");

numerosMedia = [];

function mediaEntreNumeros(qtd) {
    for (i = 0; i < qtd; i++) {
        numerosMedia[i] = prompt(`${i + 1}° Número: `);
    }
    numerosMedia = numerosMedia.map(num => parseInt(num));

    let soma = numerosMedia.reduce((acc, num) => acc + num, 0);
    let media = soma / qtd;

    console.log(`\nMédia = ${media}`);
}

var quantidade = prompt(`Quantidade de numeros a inserir: `);

mediaEntreNumeros(quantidade);

// 4- Crie uma função que receba 5 números e verifique qual é o menor deles, para isso utilize array armazenar os números.

console.log("\n----------Receber 5 Números e Verificar o Menor Entre Eles----------\n");

var numerosMenor = [];

for (i=0; i<5; i++) {
    numerosMenor[i] = prompt(`${i + 1}° Número: `);
}

numerosMenor = numerosMenor.map(num => parseInt(num));

function verificarMenorNumero() {
    numerosMenor.sort((a, b) => a - b);
    return numerosMenor[0];
}

var menorNumero = verificarMenorNumero();

console.log(`\nO menor número é: ${menorNumero}`);