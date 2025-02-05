class Cliente {
    constructor(nome, sobrenome, rg, cpf, telefone, idade, altura, peso, profissao, filhos) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.rg = rg;
        this.cpf = cpf;
        this.telefone = telefone;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.dtNascimento = profissao;
        this.filhos = filhos;
    }
    imprimirNome () {
        console.log(this.nome + " " + this.sobrenome);
    }
    imprimirInformacoes () {
        console.log("RG - "+ this.rg +
        "\nCPF - " + this.cpf +
        "\nTelefone - " + this.telefone +
        "\nIdade - " + this.idade + " anos" +
        "\nAltura - " + this.altura + "m" +
        "\nPeso - " + this.peso + "kg" +
        "\nData de Nascimento - " + this.dtNascimento +
        "\nQuantidade de Filhos - " + this.filhos + " filhos"
        )
    }
}

const cliente1 = new Cliente;

cliente1.nome = "Pedro";
cliente1.sobrenome = "Silva";
cliente1.altura = 1.70;
cliente1.cpf = "000.000.000-00";
cliente1.dtNascimento = 2000;
cliente1.filhos = 2;
cliente1.idade = 2024 - cliente1.dtNascimento;
cliente1.peso = 67.00;
cliente1.rg = 11111;
cliente1.telefone = "(69) 00000-0000";

console.log("Nome")
cliente1.imprimirNome();
console.log("\nInformações\n");
cliente1.imprimirInformacoes();