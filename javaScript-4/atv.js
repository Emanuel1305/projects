const prompt = require('prompt-sync')();

console.log("\n----------Calcular Área----------\n");

function calcularArea(comodo, largura, altura) {
    const area = largura * altura;
    console.log(`\nLargura - ${largura}m`);
    console.log(`Altura - ${altura}m`);
    console.log(`O cômodo ${comodo} tem ${area}m².`);
}

const nomeComodo = prompt('Nome do cômodo: ');
const largura = prompt('Largura do cômodo: ');
const altura = prompt('Altura do cômodo: '); 

calcularArea(nomeComodo, largura, altura);

console.log("\n----------Calcular IMC----------\n");

function calcularImc (pesoP, alturaP) {
    const imc = pesoP / (alturaP ** 2);
    return imc;
}

const pesoP = prompt('Informe seu peso: ');
const alturaP = prompt('Informe sua altura: ');

const imc = calcularImc(pesoP, alturaP);

console.log(`\nPeso - ${pesoP}Kg`);
console.log(`Altura - ${alturaP}m`);
console.log(`IMC - ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log("Abaixo do peso normal");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log("Exesso de Peso");
} else if (imc >= 30.0 && imc <= 34.9) {
    console.log("Obesidade Classe I");
} else if (imc >= 35.0 && imc <= 39.9) {
    console.log("Obesidade Classe II");
} else if (imc >= 40.0) {
    console.log("Obesidade Classe III");
}
