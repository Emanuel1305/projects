let prompt = require("prompt-sync")();

// Exercicio 2

function converterParaMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

class Pessoa {
    constructor(nome, quantidadeFilhos, salario) {
        this.nome = nome;
        this.quantidadeFilhos = quantidadeFilhos;
        this.salario = salario;
    }
    calcularImposto () {
        let imposto;
        if (this.salario < 2500) {
            console.log(
                "\nNome             : " + this.nome +
                "\nFilhos           : " + this.quantidadeFilhos +
                "\nImposto          : " + "Insento de Imposto!" +
                "\nSalário          : " + converterParaMoeda(this.salario)
            );
        } else if (this.salario >= 2500 && this.salario < 5000){
            if (this.quantidadeFilhos == 0) {
                imposto = this.salario * 0.2;
                const salario = this.salario - imposto;
                console.log(
                    "\nNome                 : " + this.nome +
                    "\nFilhos               : " + this.quantidadeFilhos +
                    "\nSalário              : " + converterParaMoeda(this.salario) +
                    "\n(-) Imposto(20%)     : " + converterParaMoeda(imposto) +
                    "\nSalário - Imposto    : " + converterParaMoeda(salario)
                );
            } else if (this.quantidadeFilhos == 1) {
                imposto = this.salario * 0.15;
                const salario = this.salario - imposto;
                console.log(
                    "\nNome                 : " + this.nome +
                    "\nFilhos               : " + this.quantidadeFilhos +
                    "\nSalário              : " + converterParaMoeda(this.salario) +
                    "\n(-) Imposto(15%)     : " + converterParaMoeda(imposto) +
                    "\nSalário - Imposto    : " + converterParaMoeda(salario)
                );
            } else if (this.quantidadeFilhos >= 2) {
                imposto = this.salario * 0.10;
                const salario = this.salario - imposto;
                console.log(
                    "\nNome                 : " + this.nome +
                    "\nFilhos               : " + this.quantidadeFilhos +
                    "\nSalário              : " + converterParaMoeda(this.salario) +
                    "\n(-) Imposto(10%)     : " + converterParaMoeda(imposto) +
                    "\nSalário - Imposto    : " + converterParaMoeda(salario)
                );
            }
        } else if (this.salario >= 5000) {
            if (this.quantidadeFilhos == 0) {
                imposto = this.salario * 0.30;
                const salario = this.salario - imposto;
                console.log(
                    "\nNome                 : " + this.nome +
                    "\nFilhos               : " + this.quantidadeFilhos +
                    "\nSalário              : " + converterParaMoeda(this.salario) +
                    "\n(-) Imposto(30%)     : " + converterParaMoeda(imposto) +
                    "\nSalário - Imposto    : " + converterParaMoeda(salario)
                );
            } else if (this.quantidadeFilhos == 1) {
                imposto = this.salario * 0.28;
                const salario = this.salario - imposto;
                console.log(
                    "\nNome                 : " + this.nome +
                    "\nFilhos               : " + this.quantidadeFilhos +
                    "\nSalário              : " + converterParaMoeda(this.salario) +
                    "\n(-) Imposto(28%)     : " + converterParaMoeda(imposto) +
                    "\nSalário - Imposto    : " + converterParaMoeda(salario)
                );
            } else if (this.quantidadeFilhos >= 2) {
                imposto = this.salario * 0.22;
                const salario = this.salario - imposto;
                console.log(
                    "\nNome                 : " + this.nome +
                    "\nFilhos               : " + this.quantidadeFilhos +
                    "\nSalário              : " + converterParaMoeda(this.salario) +
                    "\n(-) Imposto(22%)     : " + converterParaMoeda(imposto) +
                    "\nSalário - Imposto    : " + converterParaMoeda(salario)
                );
            }
        }
    }
}

var nome = prompt("Informe o nome: ");
var qtdFilhos = parseInt(prompt("Informe a quantidade de filhos: "), 10);
var salario = parseFloat(prompt("Informe o salário: "));


const pessoa1 = new Pessoa(nome, qtdFilhos, salario);

pessoa1.calcularImposto();