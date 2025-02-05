let boxes = document.querySelectorAll('.box');
let subtitulos = document.querySelectorAll('.subtitulo');

boxes[0].innerText = 'Mudar cor de fundo!';
boxes[1].innerText = 'Clique 2x para mudar o fundo da box!';

boxes.forEach(box => {
    box.addEventListener('click', () => {
        document.body.style.backgroundColor = 'green';
    });
    box.addEventListener('dblclick', () => {
        box.style.backgroundColor = 'yellow';
    });
});

subtitulos.forEach(subtitulo => {
    subtitulo.addEventListener('click', () => {
        subtitulo.style.color = 'blue';
    });
    subtitulo.addEventListener('mouseout', () => {
        subtitulo.style.color = 'black';
    });
});
