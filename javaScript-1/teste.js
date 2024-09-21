/* Função de soma de dois números */
function soma(num1, num2) { /* function(função) soma(nome da função) (num1(1° parâmetro), num2(2° parâmetro)) */
    return num1 + num2; /* return(indica o que vai ser retornado) num1 + num2 */
}

/* Função que muda a cor de fundo de uma div(box) */
function mudarBackground() {
    var caixa = document.getElementById("box");
    caixa.style.background = "red";
}

function imprimirNome() {
    var nome = document.getElementById("p");
    nome.innerText = ("Emanuel Fagundes");
}

function reset() {
    var caixa = document.getElementById("box");
    caixa.style.background = "white";
    var nome = document.getElementById("p");
    nome.innerText = ("");
}



