class Venda {
    constructor (ID, data, valor, nomeProduto, tipoPagamento) {
        this.ID = ID;
        this.data = data;
        this.valor = valor;
        this.nomeProduto = nomeProduto;
        this.tipoPagamento = tipoPagamento;
    }
    calcularJuros (taxa, numeroDeParcelas) {
        this.valor = this.valor + ((taxa / 100) * numeroDeParcelas);
        return this.valor / numeroDeParcelas;
    }
}

const venda01 = new Venda(1, "02/11", 100.00, "Fone", "Crédito");


console.log (`O ${venda01.nomeProduto}, com preço original de ${(venda01.valor).toFixed(2)}R$\nParcelado em 10 vezes, com taxa de juros de 10% ao mês\nCada parcela ficará por ${(venda01.calcularJuros(10, 10)).toFixed(2)}R$`)