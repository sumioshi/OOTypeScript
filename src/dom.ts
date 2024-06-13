// Seleciona o elemento HTML com o id 'nome' e o armazena na variável campoNome.
const campoNome = document.getElementById('nome');

// Seleciona todos os elementos <form> do documento HTML e os armazena em formulario (um array-like object).
const formulario = document.getElementsByTagName('form');

// Seleciona o elemento HTML com o id 'btn-enviar' e o armazena na variável botaoEnviar.
const botaoEnviar = document.getElementById('btn-enviar');

// Adiciona um ouvinte de evento para o clique no elemento botaoEnviar, se ele existir.
// Quando o botão é clicado, a função de callback é executada.
botaoEnviar?.addEventListener('click', (e: MouseEvent) => {
    // O código dentro desta função de callback será executado quando o botão for clicado.
});
