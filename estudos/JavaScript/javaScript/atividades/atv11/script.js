const dadosCad = document.getElementById('formularioCad');
const dadosLogin = document.getElementById('formularioLogin');

const btnReg = document.getElementById('registrar');
const btnLogin = document.getElementById('logar');

var usuarioPadrao = "admin";
var senhaPadrao = "admin";

btnReg.addEventListener('click', (event) => {
    event.preventDefault()
    if (dadosCad.age.value >= 18 ) {
        /*alert(
            "Usuario: " + dadosCad.user.value +
            "\nIdade: " + dadosCad.age.value +
            "\nEmail: " + dadosCad.email.value +
            "\nSenha: " + dadosCad.password.value
        );*/
        registrarDados();
    } else {
        alert('Usuário menor de Idade!');
    }
})

btnLogin.addEventListener('click', () => {
    if(dadosLogin.userLogin.value == usuarioPadrao && dadosLogin.userPassword.value == senhaPadrao){
        alert('Login realizado!')
    }else{
        alert('Senha ou usuário inválidos!')
    }
})

function registrarDados(){
    var tabela = document.getElementById('tabela');

    var addTr = document.createElement('tr');
    var addTd1 = document.createElement('td');
    var addTd2 = document.createElement('td');
    var addTd3 = document.createElement('td');

    addTd1.innerText = dadosCad.user.value;
    addTd2.innerText = dadosCad.age.value;
    addTd3.innerText = dadosCad.email.value;

    tabela.appendChild(addTr);
    addTr.appendChild(addTd1);
    addTr.appendChild(addTd2);
    addTr.appendChild(addTd3);
}
