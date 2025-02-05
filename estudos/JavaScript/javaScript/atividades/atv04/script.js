const dadosCadastro = document.getElementById('formCadastro');
const dadosLogin = document.getElementById('formLogin');
const btn1 = document.getElementById('btnRegistrar');
const btn2 = document.getElementById('btnLogar');

var usuario= "user";
var senha = "user";

btn1.addEventListener('click', (event) => {
    event.preventDefault()
    if (dadosCadastro.inputIdade.value >= 18 ) {
        alert(
            "Usuario: " + dadosCadastro.inputUsuario.value +
            "\nIdade: " + dadosCadastro.inputIdade.value +
            "\nEmail: " + dadosCadastro.inputEmail.value +
            "\nSenha: " + dadosCadastro.inputSenha.value
        );
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
