fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((response) => response.json())
  .then((dado) => console.log(dado));

let idBaralho = 0;
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((response) => response.json())
  .then((dado) => (idBaralho = dado.deck_id));

let proximaCarta = () => {
  fetch(`https://deckofcardsapi.com/api/deck/${idBaralho}/draw/?count=1`)
    .then((response) => response.json())
    .then(
      (dado) =>
        (document.body.innerHTML = `<h1 style="text-align:center">Consumindo API Deck of Cards</h1><div style='display:flex;height:80vh;align-items:center;justify-content:center'><img style='height:55%;cursor:pointer'' src=${dado.cards[0].image}></div>`)
    );
};

proximaCarta();

addEventListener("click", proximaCarta);
