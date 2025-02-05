const dadosCadastro = document.getElementById('formCadastro');
const dadosLogin = document.getElementById('formLogin');
const btn1 = document.getElementById('btnRegistrar');
const btn2 = document.getElementById('btnLogar');

var usuario= "user";
var senha = "user";

btn1.addEventListener('click', (event) => {
    event.preventDefault()
    if (dadosCadastro.inputIdade.value >= 18 ) {
        registrarDados();
    } else {
        alert('Usuário menor de Idade!');
    }
})

btn2.addEventListener('click', () => {
    if(dadosLogin.inputUserLogin.value == usuario && dadosLogin.inputUserPassword.value == senha){
        alert('Login realizado!')
    }else{
        alert('Senha ou usuário inválidos!')
    }
})

function registrarDados(){
    var tabela = document.getElementById('tabelaUsuarios');

    var addTr = document.createElement('tr');
    var addTd1 = document.createElement('td');
    var addTd2 = document.createElement('td');
    var addTd3 = document.createElement('td');

    addTd1.innerText = dadosCadastro.inputUsuario.value;
    addTd2.innerText = dadosCadastro.inputIdade.value;
    addTd3.innerText = dadosCadastro.inputEmail.value;

    tabela.appendChild(addTr);
    addTr.appendChild(addTd1);
    addTr.appendChild(addTd2);
    addTr.appendChild(addTd3);
}
