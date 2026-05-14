async function buscar_alunos() {
const destino = document.getElementById('espaco');

try {
const response = await fetch('json.json');

if (!response.ok) throw new Error('Falha ao carregar dados');

const bituca = await response.json();

destino.innerHTML = '';

bituca.forEach(item => {
const card = document.createElement('div');
card.className = 'card';

card.innerHTML = `
<img src="imagens/${item.imgs}" alt="Foto de ${item.nome}">
<h3></h3>
<p></p>
<a href="${item.link}">
<button type="button">Saiba Mais</button>
</a>`;

card.querySelector('h3').textContent = item.nome;
card.querySelector('p').textContent = item.desc;

destino.appendChild(card);
});
} catch (error) {
console.error('Erro na requisição:', error);
destino.innerHTML = `
<p>Desculpa, não foi possível carregar as informações no momento.</p>
`;
}
}