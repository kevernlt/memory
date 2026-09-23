//variable d'image
const dimension = 150;
let img = [];

//DOM variables
const board = document.getElementById("game-board");

//game variables
let firstCard = null;
let secondCard;
let lockBoard = false;
let moves = 0;
let matchedCount = 0;

//URL generator
for (let i = 0; i < 8; i++) {
    const imgStart = Math.floor(Math.random() * 100) + 1;
    const url = `https://picsum.photos/id/${imgStart}/${dimension}`;
    img.push(url);
}
let cards = [...img, ...img];

//card shuffler
function shuffle(array) {
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * i);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//on-click card
function handleCardClick(card) {
    if (card.dataset.flip == "true") {
        return;
    } else {
        if (lockBoard == true) {
            return;
        } else {
            card.dataset.flip = "true";
            if (firstCard == null) {
                firstCard = card;
                card.innerHTML = `<img src=${card.dataset.value}>`;
            } else {
                secondCard = card;
                card.innerHTML = `<img src=${card.dataset.value}>`;
                lockBoard = true;
                moves++;
                checkMatch();
            }
        }
    }
}

//matching clicked card
function checkMatch() {
    if (firstCard.dataset.value == secondCard.dataset.value) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        lockBoard = false;
        firstCard = null;
        secondCard = null;
    } else {
        setTimeout(() => {
            firstCard.innerHTML = "";
            secondCard.innerHTML = "";
            firstCard.dataset.flip = "false";
            secondCard.dataset.flip = "false";
            lockBoard = false;
            firstCard = null;
            secondCard = null;
        }, 800);

    }
}

//game initialisation
function initGame() {
    shuffle(cards);
    cards.forEach((element) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = element;
        card.dataset.flip = "false";
        card.role = 'button';
        card.tabIndex = '0';
        card.addEventListener('click', () => handleCardClick(card));
        board.appendChild(card);
    })
}

initGame();
