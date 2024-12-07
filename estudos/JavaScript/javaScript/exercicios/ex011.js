let prompt = require("prompt-sync")();

// Objetos

class Livro {
    constructor (titulo, autor, numeroPag) {
        this.titulo = titulo,
        this.autor = autor,
        this.numeroPag = numeroPag
    }
}

let livro1 = new Livro("Beetlejuice", "Tim Burtom", 100);
console.log(`Título: ${livro1.titulo}`);
console.log(`Autor: ${livro1.autor}`);
console.log(`Páginas: ${livro1.numeroPag}pg`);