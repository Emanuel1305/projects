let prompt = require("prompt-sync")();

// Condições

console.log();
var idade = parseInt(prompt("Informe sua idade: "));

if (idade >= 18) {
    console.log("Maior de Idade");
} else {
    console.log("Menor de Idade");
}

console.log();