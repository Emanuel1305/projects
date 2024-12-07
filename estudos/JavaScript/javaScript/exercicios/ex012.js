let prompt = require("prompt-sync")();
let readline = require('readline');

function esperarTecla() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Pressione qualquer tecla para continuar...', () => {
            rl.close();
            resolve();
        });
    });
}

function mostrarMenu() {
    console.log(
        "|                  MENU                  |\n" +
        "|----------------------------------------|\n" +
        "|  [1] Adcionar Novo Produto             |\n" + 
        "|  [2] Listar Produtos em Estoque        |\n" +
        "|  [3] Contar Produtos em Estoque        |\n" +
        "|  [4] Calcular Valor Total em Estoque   |\n" +
        "|  [5] Tabela de Item Estocados          |\n" +
        "|  [6] Sair                              |\n" +
        "|----------------------------------------|\n"
    );
}

function converterParaMoeda(valor) {
    let valorFormatado = valor.toFixed(2).replace(".", ",");
    return `R$ ${valorFormatado}`;
}

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    descricao () {
        return `Nome: ${this.nome}\nPreço: ${converterParaMoeda(this.preco)}\nQuantidade em estoque: ${this.quantidade}`
    }
}

class Loja {
    constructor(produtos = []) {
        this.produtos = produtos;
    }
    calcularValorTotalEstoque () {
        let total = 0.0;
        for (let i = 0; i < this.produtos.length; i++) {
            total += (this.produtos[i].preco) * this.produtos[i].quantidade;
        } 
        return converterParaMoeda(total);
    }
    listarProdutosEstocados() {
        for (let i = 0; i < this.produtos.length; i++) {
            console.log("- " + this.produtos[i].nome);
        }
    }
    contarProdutos() {
        let total = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            total += this.produtos[i].quantidade;
        }
        return total;
    }
    gerarTabelaProdutos () {
        console.log("|        Nome          |      Valor       |   Quantidade  |");
        console.log("-----------------------------------------------------------");
        for (let i = 0; i < this.produtos.length; i++) {
            let produto = this.produtos[i];
            let linha = `| ${produto.nome.padEnd(20)} | ${converterParaMoeda(produto.preco).padEnd(16)} | ${String(produto.quantidade).padEnd(13)} |`;
            console.log(linha);
        }
    }
    adicionarProdutos (nome, preco, quantidade) {
        const novoProduto = new Produto(nome, preco, quantidade);

        this.produtos.push(novoProduto); // Adiciona um novo produto ao array
        console.log(`Produto ${nome} adicionado com sucesso!`);
    }
}

// Instancia novos Produtos
const prod01 = new Produto("Banana", 1.99, 10);
const prod02 = new Produto("Maçã", 2.99, 10);
const prod03 = new Produto("Achocolatado", 5.00, 10);

// Armazena os produdos em um Array
const loja1 = new Loja([prod01, prod02, prod03]);

async function main() {
    let resp = 6;
    do {
        mostrarMenu();
        resp = parseInt(prompt("Informe a Opção desejada: "));
        console.log();
        switch (resp) {
            case 1:
                // Adcionar Novo Produto
                let nome = prompt("Informe o nome do produto: ");
                let preco = parseFloat(prompt("Informe o preço do produto: "));
                let quantidade = parseInt(prompt("Informe a quantidade adicionada: "));

                loja1.adicionarProdutos(nome, preco, quantidade);
                break;
            case 2:
                // Listar Produtos em Estoque
                console.log(
                    "Produtos em Estoque\n" +
                    "-------------------"
                );

                loja1.listarProdutosEstocados();
                break;
            case 3:
                // Contar Produtos em Estoque
                console.log(`Contém ${loja1.contarProdutos()} Produtos em Estoque.`);
                break;
            case 4:
                // Calcular Valor Total em Estoque
                console.log(`O Valor Total em Estoque é de ${loja1.calcularValorTotalEstoque()}.`);
                break;
            case 5:
                // Tabela de Item Estocados
                loja1.gerarTabelaProdutos();
                break;
            case 6:
                break;
            default:
                console.log("Opção Inválida!");
                break;
        }
        
        await esperarTecla(); // Aguarda o usuário apertar qualquer tecla
        console.clear(); // Limpa o Console
    } while (resp !== 6); 
}

main();