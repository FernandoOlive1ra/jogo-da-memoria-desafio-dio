const cards =  document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
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

cards.forEach((card) => {
    card.addEventListener('click',flipCard);
})

