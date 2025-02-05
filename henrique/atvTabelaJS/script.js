document.getElementById("botao1").addEventListener("click", () => preencherTabela(1));
document.getElementById("botao2").addEventListener("click", () => preencherTabela(2));
document.getElementById("botao3").addEventListener("click", () => preencherTabela(3));

function preencherTabela(modo) {
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = ""; // Limpa a tabela antes de adicionar novos elementos
    
    let linhas, colunas;

    switch (modo) {
        case 1:
            linhas = 4;
            colunas = 2;
            break;
        case 2:
            linhas = 2;
            colunas = 4;
            break;
        case 3:
            linhas = 6;
            colunas = 1;
            break;
    }

    for (let i = 0; i < linhas; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < colunas; j++) {
            let td = document.createElement("td");
            let botao = document.createElement("button");

            botao.textContent = `Clique ${i + 1}-${j + 1}`;
            botao.onclick = () => alert(`Botão ${i + 1}-${j + 1} foi clicado!`);

            td.appendChild(botao);
            tr.appendChild(td);
        }
        
        tabela.appendChild(tr);
    }
}
