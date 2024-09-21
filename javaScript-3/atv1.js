console.log("\n----------Veículo----------");

var marcaVeiculo = "Honda";
var anoVeiculo = 2000;
var kmVeiculo = 1500;
var valorVeiculo = 6000;

const agora = new Date();
var anoAtual = agora.getFullYear();

console.log("\nMarca - " + marcaVeiculo);
console.log("Ano do Veículo - " + anoVeiculo);
console.log("Anos do Veículo com base no Ano Atual - " + (anoAtual - anoVeiculo) + " anos");
console.log("Km do Veículo - " + kmVeiculo + "Km");
console.log("Preço do Veículo - " + valorVeiculo + "R$");
console.log("Valor com desconto de 20% - " + (valorVeiculo - (valorVeiculo * 0.2)) + "R$");


