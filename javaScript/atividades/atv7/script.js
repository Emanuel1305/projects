const ol = document.getElementsByClassName('lista');
for (let i = 0; i < ol.length; i++) {
    ol[i].style.color = 'blue';
    ol[i].style.border = '1px solid blue';
}

const carros = document.querySelectorAll('.carro');
for (let i = 0; i < carros.length; i++) {
    carros[i].style.color = 'green';
}

const motos = document.querySelectorAll('.moto');
for (let i = 0; i < motos.length; i++) {
    motos[i].style.color = 'purple';
}

const barcos = document.querySelectorAll('.barco');
for (let i = 0; i < barcos.length; i++) {
    barcos[i].style.color = 'red';
}

const li = document.querySelectorAll('li');
for (let i = 0; i < li.length; i++) {
    li[i].style.fontFamily = 'Arial, sans-serif';
}
