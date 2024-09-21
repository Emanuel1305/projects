var marcaVeiculo = "";
var anoVeiculo = 0;
var kmVeiculo = 0;
var valorVeiculo = 0.0;
var anoAtual = 0;
anoAtual = parseInt(document.getElementById('data').value);

function calcularAno() {
    anoVeiculo = parseInt(document.getElementById('ano').value);
    anoAtual = new Date().getFullYear();
    marcaVeiculo = document.getElementById('marca').value;

    var ano = anoAtual - anoVeiculo;

    document.getElementById('txtAno').textContent = "O veículo da marca " + marcaVeiculo + " tem " + ano + " anos.";
}

function calcularDesconto() {
    valorVeiculo = parseFloat(document.getElementById('valor').value);
    marcaVeiculo = document.getElementById('marca').value;

    var valorDesc = valorVeiculo - (valorVeiculo*0.2);

    document.getElementById('txtDesc').textContent = "O veículo da marca " + marcaVeiculo + ", custára " + valorDesc + "R$ com o desconto de 20% em cima do valor total(" + valorVeiculo + "R$).";
}

console.log("Hello word");