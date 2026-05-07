function aura() {
    alert(dasddasdsadasdas)
    fetch('json.json')
    .then (response => respons.json())
    .then(dadinho =>{
        document.getElementsByClass('destino').innerHTML =
        `<div class="card">
            <img src="cafes/`+dadinho.imagem+`" class="chachines" alt="">
            <p class="descricao">`+dadinho.nome+`</p>
            <p class="preco">`+dadinho.aura+`</p>
            <p class="botao" type butt><a class="letra_botao" href="chadaprod.html">`+dadinho.endereco+`saiba mais/adicionar ao carrinho</a ></p>
            <button type="button" onclick="aura ()"></button>
    </div>`;
        
    })
}