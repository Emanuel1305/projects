let prompt = require("prompt-sync")();


// Exercicio 01

console.log("\n----------Verificar se limite de cartão é suficiênte----------\n");

var limite = parseFloat(prompt("Informe o limite do cartão: "));

console.log("");

var prod1 = parseFloat(prompt("Valor do produto 1: "));
var prod2 = parseFloat(prompt("Valor do produto 2: "));
var prod3 = parseFloat(prompt("Valor do produto 3: "));
var prod4 = parseFloat(prompt("Valor do produto 4: "));

var total = prod1 + prod2 + prod3 + prod4;

console.log(`
    Limite do Cartão: ${limite}
    Valor total dos produtos: ${total}`
);

if (total < limite) {
    console.log(`\nO limite do cartão é suficiente!`);
} else {
    console.log(`\nO limite do cartão é insuficiênte!`);
}