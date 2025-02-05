let prompt = require('prompt-sync')();

// Exercicio 1

function criarPessoa() {
    const nome = prompt("Informe o nome: ");
    const idade = parseInt(prompt("Informe a idade: "), 10);
    return new Pessoa(nome, idade);
}

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    verificarAposentadoria() {
        if (this.idade > 65) {
            console.log(`${this.nome} tem direito de aposentadoria!`);
        } else {
            console.log(`${this.nome} não pode se aposentar!`);
        }
    }
}

console.log("-----Pessoa 1-----\n");
const pessoa1 = criarPessoa();
console.log("\n-----Pessoa 2-----\n");
const pessoa2 = criarPessoa();

console.log("\n---Verificando Direito a Aposentadoria---\n");
pessoa1.verificarAposentadoria();
pessoa2.verificarAposentadoria();

