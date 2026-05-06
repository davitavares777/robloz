function busca_alunos(){
    fetch('json.json')
    .then(response => response.json())
    .then(dadinho => {
        document.getElementById('lugar'). innerHTML =

        `<div class="espaco">
    <img src="json/img/`+dadinho.imagem+`" alt="">
    <h3>`+dadinho.nome+`</h3>
    <p>`+dadinho.descricao+`</p>
    <a href="`+dadinho.endereco+`">
      <button type="button">saiba mais</button>
      </a>
</div>`;

       



})
}