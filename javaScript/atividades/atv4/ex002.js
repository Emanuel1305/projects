let prompt = require("prompt-sync")();


// Exercicio 02

console.log("\n----------Imprimir mensagem de acordo com o turno----------\n");

console.log(`
    M - Matutino
    V - Vespertino
    N - Noturno
`);
var turno = prompt("Qual turno você estuda: ");

if (turno.toUpperCase() === "M") {
    console.log("Bom Dia!");
}else if (turno.toUpperCase() === "V") {
    console.log("Boa Tarde!");
}else if (turno.toUpperCase() === "N") {
    console.log("Boa Noite!");
}else {
    console.log("Valor Inválido!");
}