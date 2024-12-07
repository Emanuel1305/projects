const formulario = document.querySelector('.cabecalho')
const boxArtigo = document.querySelector('.box-artigo')

formulario.addEventListener('submit', async function(event){ 
    event.preventDefault()
    const pesquisa = document.querySelector('#txtPesquisa')

    const data = await fetch(`https://newsapi.org/v2/everything?q=${pesquisa.value}&language=pt&sortBy=publishedAt&apiKey=69a16738426d4a7881523a68508a3621`);
 
    const noticias = (await data.json()).articles.slice(0, 20)

    imprimirNoticias(noticias)
})

async function imprimirNoticias(noticias) {
    boxArtigo.innerHTML = noticias.map(noticia => `
        <div class="linkNoticia">
            <h3></h3>
            <></>
            <></>
            <></>
            <></>
            <></>
        </div>
    `).join('');
}



