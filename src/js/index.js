/*
OBJETIVO 1 - quando passar o mouse em cima do personagem temos que: 
    a- colocar a classe selecionado no personagem que passamos o mouse em cima para adicionarmos a animação.

    b- retirar a classe selecionado do personagem que esta selecionado

OBJETIVO 2 - trocar a imagem e nome do personagem grande
    a- alterar a imagem do jogador1
    b - alterar o nome do jogador1
*/ 

// OBJETIVO 1
const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')
        
        //OBJETIVO 2
        const idSelecionado = personagem.attributes.id.value;
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        
        const nomeSelecionado = personagem.getAttribute('data-name');
        
        nomeJogador1.innerHTML = nomeSelecionado;

    });
})


