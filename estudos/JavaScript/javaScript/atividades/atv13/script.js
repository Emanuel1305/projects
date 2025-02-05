const tabela = document.querySelector(".tabela");

const btn1 = document.getElementById("botao1");
const btn2 = document.getElementById("botao2");
const btn3 = document.getElementById("botao3");

btn1.addEventListener('click', () => registrarDados(4, 2));
btn2.addEventListener('click', () => registrarDados(2, 4));
btn3.addEventListener('click', () => registrarDados(6, 1));

const mensagens = [
    "Bom dia!", "Boa tarde!", "Boa noite!", "Ótimo trabalho!",
    "Seja bem-vindo!", "Foco e disciplina!", "Você está indo bem!",
    "Continue assim!", "Sucesso!", "Feliz dia!", "Acredite em você!",
    "Seja Feliz!", "Tenha um ótimo final de Semana!", "Estude mais um pouco!",
    "Não desista dos seus objetivos!", "Beba Água!"
];

function obterMensagemAleatoria() {
    const indice = Math.floor(Math.random() * mensagens.length);
    return mensagens[indice];
}

function registrarDados(quantidadeLinhas, quantidadeColunas) {
    tabela.innerHTML = ""; 
    
    for (let i = 0; i < quantidadeLinhas; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < quantidadeColunas; j++) {
            let td = document.createElement("td");
            let button = document.createElement("button");

            let mensagem = obterMensagemAleatoria(); 
            button.textContent = `Clique aqui`;
            button.addEventListener("click", () => alert(mensagem));

            td.appendChild(button);
            tr.appendChild(td);
        }
        
        tabela.appendChild(tr);
    }
}
