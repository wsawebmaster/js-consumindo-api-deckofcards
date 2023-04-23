
# 💻 Consumindo a API Deck of Cards com JavaScript

>Abra o **Modo Desenvolvedor** em seu navegador e execute os comandos abaixo no Console ou da maneira que achar mais interessante para o seu momento

1 - <em>Pega o baralho e quando recebe uma resposta exibe no console</em>

    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then( response => console.log(response));

2 - <em>Retorna os dados em Json na forma de objeto</em>

    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then( response => response.json()).then( dado => console.log(dado));

3 - <em>Guarda o ID em uma variável</em>

    let idBaralho = 0;
      fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(response => response.json()).then( dado => idBaralho = dado.deck_id);

4 - <em>Exibe o ID</em>

    idBaralho

5 - <em>Função exibir próxima carta centralizando a imagem horizontalmente e verticalmente</em>

    let proximaCarta = () => {
      fetch(`https://deckofcardsapi.com/api/deck/${idBaralho}/draw/?count=1`).then( response => response.json()).then( dado => document.body.innerHTML = `<h1 style="text-align:center">Consumindo API Deck of Cards</h1><div style='display:flex;height:80vh;align-items:center;justify-content:center'><img style='height:55%;cursor:pointer'' src=${dado.cards[0].image}></div>`
        );
      }

6 - <em>Chama a função criada</em>

      proximaCarta()

7 - <em>Adiciona evento que ao clicar exibe a próxima carta</em>

    addEventListener('click',proximaCarta);


## 🚀 Tecnologias

- HTML
- CSS
- JavaScript
  - console.log
  - fetch
  - declarando variável
  - criando e executando função
  - adicionando EventListener click


## 💻 Projeto

O projeto consome a API exibindo uma carta por vez que vai alternando com clique

[AcessarProjeto] (https://wsawebmaster.github.io/js-consumindo-api-deckofcards/)

## ⚙️ Funcionalidades

- Conecta a API
- Preview em tempo real

## 📖 Documentação

[API](https://deckofcardsapi.com/)
