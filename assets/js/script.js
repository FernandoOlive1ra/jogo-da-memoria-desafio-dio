const cards =  document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard) return;

    if(this === firstCard) return;

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

    resetBoard();
}

function unflipCard() {
    lockBoard = true;

    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
         
        resetBoard();  
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard,lockBoard] = [false,false];
    [firstCard,secondCard] = [null,null];
}



cards.forEach((card) => {
    card.addEventListener('click',flipCard);
})

