const cards =  document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard) return;
    
    this.classList.add('flip');
    if (!hasFlippedCard ) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false; 

    chekForMatch();
}

function chekForMatch(){
     if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
     }


     unflipCard();    
}

function disableCards() {
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
}

function unflipCard() {
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}

cards.forEach((card) => {
    card.addEventListener('click',flipCard);
})

