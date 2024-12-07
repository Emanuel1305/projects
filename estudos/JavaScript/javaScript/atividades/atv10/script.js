const idade = document.querySelector('#idade');
const usuario = document.querySelector('#usuario');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const senha2 = document.querySelector('#senhaConfirm');
const acordo = document.querySelector('#radAcordo');

const btnReg = document.querySelector('#registrar');
const btnLogin = document.querySelector('#logar');

const userLogin = document.querySelector('#userLogin');
const passLogin = document.querySelector('#userPassword');

const usuarioPadrao = 'admin';
const senhaPadrao = 'admin';

btnReg.addEventListener('click', () => {
    if (idade.value > 18 ) {
        alert(
            "Usuario: " + usuario.value +
            "\nIdade: " + idade.value +
            "\nEmail: " + email.value +
            "\nSenha: " + senha.value
        );
    } else {
        alert('Usuário menor de Idade!');
    }
})

btnLogin.addEventListener('click', () => {
    if(userLogin.value == usuarioPadrao && passLogin.value == senhaPadrao){
        alert('Login realizado!')
    }else{
        alert('Senha ou usuário inválidos!')
    }
})
