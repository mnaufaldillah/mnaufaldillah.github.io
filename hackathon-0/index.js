const decks = [
    {name: '2', src: 'img/Hearts/2.png'}, {name: '3', src: 'img/Hearts/3.png'}, {name: '4', src: 'img/Hearts/4.png'},
    {name: '5', src: 'img/Hearts/5.png'}, {name: '6', src: 'img/Hearts/6.png'}, {name: '7', src: 'img/Hearts/7.png'},
    {name: '8', src: 'img/Hearts/8.png'}, {name: '9', src: 'img/Hearts/9.png'}, {name: '10', src: 'img/Hearts/10.png'},
    {name: 'J', src: 'img/Hearts/J.png'}, {name: 'Q', src: 'img/Hearts/Q.png'}, {name: 'K', src: 'img/Hearts/K.png'},
    {name: 'As', src: 'img/Hearts/As.png'}, {name: '2', src: 'img/Diamonds/2.png'}, {name: '3', src: 'img/Diamonds/3.png'},
    {name: '4', src: 'img/Diamonds/4.png'}, {name: '5', src: 'img/Diamonds/5.png'}, {name: '6', src: 'img/Diamonds/6.png'},
    {name: '7', src: 'img/Diamonds/7.png'}, {name: '8', src: 'img/Diamonds/8.png'}, {name: '9', src: 'img/Diamonds/9.png'},
    {name: '10', src: 'img/Diamonds/10.png'}, {name: 'J', src: 'img/Diamonds/J.png'}, {name: 'Q', src: 'img/Diamonds/Q.png'},
    {name: 'K', src: 'img/Diamonds/K.png'}, {name: 'As', src: 'img/Diamonds/As.png'}, {name: '2', src: 'img/Clubs/2.png'},
    {name: '3', src: 'img/Clubs/3.png'}, {name: '4', src: 'img/Clubs/4.png'}, {name: '5', src: 'img/Clubs/5.png'}, 
    {name: '6', src: 'img/Clubs/6.png'}, {name: '7', src: 'img/Clubs/7.png'}, {name: '8', src: 'img/Clubs/8.png'}, 
    {name: '9', src: 'img/Clubs/9.png'},{name: '10', src: 'img/Clubs/10.png'}, {name: 'J', src: 'img/Clubs/J.png'}, 
    {name: 'Q', src: 'img/Clubs/Q.png'}, {name: 'K', src: 'img/Clubs/K.png'}, {name: 'As', src: 'img/Clubs/As.png'},
    {name: '2', src: 'img/Spades/2.png'}, {name: '3', src: 'img/Spades/3.png'}, {name: '4', src: 'img/Spades/4.png'},
    {name: '5', src: 'img/Spades/5.png'}, {name: '6', src: 'img/Spades/6.png'}, {name: '7', src: 'img/Spades/7.png'},
    {name: '8', src: 'img/Spades/8.png'}, {name: '9', src: 'img/Spades/9.png'}, {name: '10', src: 'img/Spades/10.png'},
    {name: 'J', src: 'img/Spades/J.png'}, {name: 'Q', src: 'img/Spades/Q.png'}, {name: 'K', src: 'img/Spades/K.png'},
    {name: 'As', src: 'img/Spades/As.png'},
    {name: '2', src: 'img/Hearts/2.png'}, {name: '3', src: 'img/Hearts/3.png'}, {name: '4', src: 'img/Hearts/4.png'},
    {name: '5', src: 'img/Hearts/5.png'}, {name: '6', src: 'img/Hearts/6.png'}, {name: '7', src: 'img/Hearts/7.png'},
    {name: '8', src: 'img/Hearts/8.png'}, {name: '9', src: 'img/Hearts/9.png'}, {name: '10', src: 'img/Hearts/10.png'},
    {name: 'J', src: 'img/Hearts/J.png'}, {name: 'Q', src: 'img/Hearts/Q.png'}, {name: 'K', src: 'img/Hearts/K.png'},
    {name: 'As', src: 'img/Hearts/As.png'}, {name: '2', src: 'img/Diamonds/2.png'}, {name: '3', src: 'img/Diamonds/3.png'},
    {name: '4', src: 'img/Diamonds/4.png'}, {name: '5', src: 'img/Diamonds/5.png'}, {name: '6', src: 'img/Diamonds/6.png'},
    {name: '7', src: 'img/Diamonds/7.png'}, {name: '8', src: 'img/Diamonds/8.png'}, {name: '9', src: 'img/Diamonds/9.png'},
    {name: '10', src: 'img/Diamonds/10.png'}, {name: 'J', src: 'img/Diamonds/J.png'}, {name: 'Q', src: 'img/Diamonds/Q.png'},
    {name: 'K', src: 'img/Diamonds/K.png'}, {name: 'As', src: 'img/Diamonds/As.png'}, {name: '2', src: 'img/Clubs/2.png'},
    {name: '3', src: 'img/Clubs/3.png'}, {name: '4', src: 'img/Clubs/4.png'}, {name: '5', src: 'img/Clubs/5.png'}, 
    {name: '6', src: 'img/Clubs/6.png'}, {name: '7', src: 'img/Clubs/7.png'}, {name: '8', src: 'img/Clubs/8.png'}, 
    {name: '9', src: 'img/Clubs/9.png'},{name: '10', src: 'img/Clubs/10.png'}, {name: 'J', src: 'img/Clubs/J.png'}, 
    {name: 'Q', src: 'img/Clubs/Q.png'}, {name: 'K', src: 'img/Clubs/K.png'}, {name: 'As', src: 'img/Clubs/As.png'},
    {name: '2', src: 'img/Spades/2.png'}, {name: '3', src: 'img/Spades/3.png'}, {name: '4', src: 'img/Spades/4.png'},
    {name: '5', src: 'img/Spades/5.png'}, {name: '6', src: 'img/Spades/6.png'}, {name: '7', src: 'img/Spades/7.png'},
    {name: '8', src: 'img/Spades/8.png'}, {name: '9', src: 'img/Spades/9.png'}, {name: '10', src: 'img/Spades/10.png'},
    {name: 'J', src: 'img/Spades/J.png'}, {name: 'Q', src: 'img/Spades/Q.png'}, {name: 'K', src: 'img/Spades/K.png'},
    {name: 'As', src: 'img/Spades/As.png'},
    {name: '2', src: 'img/Hearts/2.png'}, {name: '3', src: 'img/Hearts/3.png'}, {name: '4', src: 'img/Hearts/4.png'},
    {name: '5', src: 'img/Hearts/5.png'}, {name: '6', src: 'img/Hearts/6.png'}, {name: '7', src: 'img/Hearts/7.png'},
    {name: '8', src: 'img/Hearts/8.png'}, {name: '9', src: 'img/Hearts/9.png'}, {name: '10', src: 'img/Hearts/10.png'},
    {name: 'J', src: 'img/Hearts/J.png'}, {name: 'Q', src: 'img/Hearts/Q.png'}, {name: 'K', src: 'img/Hearts/K.png'},
    {name: 'As', src: 'img/Hearts/As.png'}, {name: '2', src: 'img/Diamonds/2.png'}, {name: '3', src: 'img/Diamonds/3.png'},
    {name: '4', src: 'img/Diamonds/4.png'}, {name: '5', src: 'img/Diamonds/5.png'}, {name: '6', src: 'img/Diamonds/6.png'},
    {name: '7', src: 'img/Diamonds/7.png'}, {name: '8', src: 'img/Diamonds/8.png'}, {name: '9', src: 'img/Diamonds/9.png'},
    {name: '10', src: 'img/Diamonds/10.png'}, {name: 'J', src: 'img/Diamonds/J.png'}, {name: 'Q', src: 'img/Diamonds/Q.png'},
    {name: 'K', src: 'img/Diamonds/K.png'}, {name: 'As', src: 'img/Diamonds/As.png'}, {name: '2', src: 'img/Clubs/2.png'},
    {name: '3', src: 'img/Clubs/3.png'}, {name: '4', src: 'img/Clubs/4.png'}, {name: '5', src: 'img/Clubs/5.png'}, 
    {name: '6', src: 'img/Clubs/6.png'}, {name: '7', src: 'img/Clubs/7.png'}, {name: '8', src: 'img/Clubs/8.png'}, 
    {name: '9', src: 'img/Clubs/9.png'},{name: '10', src: 'img/Clubs/10.png'}, {name: 'J', src: 'img/Clubs/J.png'}, 
    {name: 'Q', src: 'img/Clubs/Q.png'}, {name: 'K', src: 'img/Clubs/K.png'}, {name: 'As', src: 'img/Clubs/As.png'},
    {name: '2', src: 'img/Spades/2.png'}, {name: '3', src: 'img/Spades/3.png'}, {name: '4', src: 'img/Spades/4.png'},
    {name: '5', src: 'img/Spades/5.png'}, {name: '6', src: 'img/Spades/6.png'}, {name: '7', src: 'img/Spades/7.png'},
    {name: '8', src: 'img/Spades/8.png'}, {name: '9', src: 'img/Spades/9.png'}, {name: '10', src: 'img/Spades/10.png'},
    {name: 'J', src: 'img/Spades/J.png'}, {name: 'Q', src: 'img/Spades/Q.png'}, {name: 'K', src: 'img/Spades/K.png'},
    {name: 'As', src: 'img/Spades/As.png'},
];

const allDetails = {
    dealer: {
        deck: [],
        score: 0
    },
    player: {
        name: 'Player 1',
        deck: [],
        score: 0,
        chip: 1,
        bet: 0
    }
}

// ! CODE STARTS HERE

const shuffle = () => {
    let decksLength = decks.length;

    while (decksLength !== 0) {
        const random = Math.floor(Math.random() * decksLength);
        decksLength--;
        
        [decks[decksLength], decks[random]] = [decks[random], decks[decksLength]];
    }
};

const start = () => {
    for (let i = 0; i < 2; i++) {
        allDetails.player.deck.push(decks.shift());
        allDetails.dealer.deck.push(decks.shift());
    }

    const playerWeb = document.querySelector('#playerCard');
    let countLeft = 0;
    for (const val of allDetails.player.deck) {
        const playerCard = document.createElement('img');
        playerCard.src = val.src;
        playerCard.style.width = '120px';
        playerCard.style.left = `${countLeft}px`;
        playerWeb.appendChild(playerCard);
        countLeft += 23;
    }
    count('player');

    const firstDealerCard = allDetails.dealer.deck[0].name;
    const dealerCount = document.querySelector('#dealerCount');
    if (Number(firstDealerCard)) {
        dealerCount.innerText = firstDealerCard;
    } else if (firstDealerCard === 'J' || firstDealerCard === 'Q' || firstDealerCard === 'K'){
        dealerCount.innerText = 10;
    } else {
        dealerCount.innerText = 11;
    }

    const dealerWeb = document.querySelector('#dealerCard');
    const dealerCard = document.createElement('img');
    dealerCard.src = allDetails.dealer.deck[0].src;
    dealerCard.style.width = '120px';
    dealerWeb.appendChild(dealerCard);
    const dealerBack = document.createElement('img');
    dealerBack.src = 'img/back.png';
    dealerBack.id = 'back';
    dealerBack.style.width = '120px';
    dealerBack.style.left = '23px';
    dealerWeb.appendChild(dealerBack);

    if ((allDetails.dealer.score + Number(allDetails.dealer.deck[1].name))=== 21) {
        winLose();
    } else if (allDetails.player.score === 21) {
        winLose();
    }
}

const hit = () => {
    allDetails.player.deck.push(decks.shift());
    // count('player1');
    count('player');

    const playerWeb = document.querySelector('#playerCard');
    const playerCard = document.createElement('img');
    playerCard.src = allDetails.player.deck[allDetails.player.deck.length-1].src;
    playerCard.style.width = '120px';
    playerCard.style.left = `${(allDetails.player.deck.length-1)*23}px`;
    playerWeb.appendChild(playerCard);
    
    const double = document.querySelector('#double');
    double.style.display = 'none'
};

const checkCard = arr => {
    const result = [];
    for (const val of arr) {
        if (val.name !== 'As') {
            result.unshift(val);
        } else {
            result.push(val);
        }
    }
    return result;
};

const count = player => {
    let checkCount = [];
    if (player === 'dealer') {
        checkCount = checkCard(allDetails.dealer.deck);
    } else {
        checkCount = checkCard(allDetails.player.deck);
    }
     
    let countTotal = 0;
    for (const val of checkCount) {
        if (Number(val.name)) {
            countTotal += Number(val.name);
        } else {
            switch (val.name) {
                case 'J':
                case 'Q':
                case 'K':
                    countTotal += 10;
                    break;
                case 'As':
                    if (countTotal > 10) {
                        countTotal += 1;
                    } else {
                        countTotal += 11;
                    }

            }
        }
    }
    
    if (player === 'dealer') {
        allDetails.dealer.score = countTotal;
    } else {
        allDetails.player.score = countTotal;
    }

    const deckCount = document.querySelector(`#${player}Count`);
    deckCount.innerText = `${countTotal}`;
}

const stand = () => {
    const reverseBack = document.querySelector('#back');
    reverseBack.src = allDetails.dealer.deck[1].src;
    count('dealer');
    while (allDetails.dealer.score < 17) {
        allDetails.dealer.deck.push(decks.shift());
        count('dealer');
        const dealerWeb = document.querySelector('#dealerCard');
        const dealerCard = document.createElement('img');
        dealerCard.src = allDetails.dealer.deck[allDetails.dealer.deck.length-1].src;
        dealerCard.style.width = '120px';
        dealerCard.style.left = `${(allDetails.dealer.deck.length-1)*23}px`;
        dealerWeb.appendChild(dealerCard);
    }

    // if ((allDetails.dealer.score < allDetails.player.player1.score) || allDetails.dealer.score > 21) {
    //     allDetails.player.player1.chip *= 2;
    //     console.log(allDetails.player.player1.chip);
    // } else if (allDetails.dealer.score === allDetails.player.player1.score) {
    //     console.log(allDetails.player.player1.chip);
    // } else {
    //     allDetails.player.player1.chip -= allDetails.player.player1.chip;
    //     console.log(allDetails.player.player1.chip);
    // }
}

const chipBet = () => {
    const playerChip = document.querySelector('#playerChip');
    playerChip.innerText = allDetails.player.chip;
    const playerBet = document.querySelector('#playerBet');
    playerBet.innerText = allDetails.player.bet;
};

const winLose = () => {
    const winLoseNoti = document.querySelector('#winLose');
    const nextGame = document.querySelector('#nextGame');
    const reverseBack = document.querySelector('#back');
    count('dealer');
    if (((allDetails.dealer.score < allDetails.player.score || allDetails.dealer.score > 21) && allDetails.player.score < 22)) {
        reverseBack.src = allDetails.dealer.deck[1].src;
        allDetails.player.chip += Number(allDetails.player.bet) * 2;
        winLoseNoti.innerText = `You won ${allDetails.player.bet * 2} chips`;
        winLoseNoti.style.display = 'inline';
        chipBet();
        clickDouble.style.display = 'none';
        clickStand.style.display = 'none';
        clickHit.style.display = 'none';
        nextGame.style.display = 'inline-block';
    } else if (allDetails.dealer.score === allDetails.player.score) {
        reverseBack.src = allDetails.dealer.deck[1].src;
        winLoseNoti.innerText = `It's a draw`;
        winLoseNoti.style.display = 'inline';
        clickDouble.style.display = 'none';
        clickStand.style.display = 'none';
        clickHit.style.display = 'none';
        nextGame.style.display = 'inline-block';
    } else {
        winLoseNoti.innerText = `You lost ${allDetails.player.bet} chips`;
        reverseBack.src = allDetails.dealer.deck[1].src;
        winLoseNoti.style.display = 'inline';
        chipBet();
        clickDouble.style.display = 'none';
        clickStand.style.display = 'none';
        clickHit.style.display = 'none';
        nextGame.style.display = 'inline-block';
        if (allDetails.player.chip < 1) {
            setTimeout(function(){
                window.location.reload();
             }, 3000);
            alert('Game Over! Rungkaadddd!');
        }
    }
}

// ! DOM STARTS HERE

shuffle();

const playMusic = document.getElementById('music-play');
const controlMusic = document.getElementById('music-control');
const gamePlay = document.getElementById('game-play');
const gameStart = document.querySelector('#game-start');
const scene = document.querySelector('#scene');
let toggle = true;

playMusic.addEventListener('click', function(){
    toggle = !toggle

    if (toggle) {
        playMusic.src = 'img/music_background_play.png';
        controlMusic.muted = false;
        controlMusic.autoplay = true;

    } else {
        playMusic.src = 'img/music_background_mute.png';
        controlMusic.muted = true;
    }
});

controlMusic.volume = 0.01;

gamePlay.addEventListener('click', function(){
    gamePlay.remove()
    const form = document.querySelector('#form-chip');
    form.style.display = 'inline';
});

const inputChip = document.querySelector('#form-chip');
inputChip.addEventListener('change', function(event) {
    allDetails.player.chip = Number(event.target.value);
    const form = document.querySelector('#form-chip');
    form.style.display = 'none';
    gameStart.style.display = 'inline';
})

gameStart.addEventListener('click', function(){
    gameStart.remove()
    const form = document.querySelector('#form-bet');
    form.style.display = 'inline';
});

const inputBet = document.querySelector('#form-bet');
inputBet.addEventListener('change', function(event) {
    if (Number(event.target.value) <= allDetails.player.chip) {
        allDetails.player.bet = Number(event.target.value);
        allDetails.player.chip -= allDetails.player.bet;
        const form = document.querySelector('#form-bet');
        form.style.display = 'none';
        scene.classList.remove('hidden');
        scene.classList.add('visible');
        chipBet();
        allDetails.dealer.deck = [];
        allDetails.player.deck = [];
        const dealerCard = document.querySelector('#dealerCard');
        dealerCard.innerHTML = '';
        const playerCard = document.querySelector('#playerCard');
        playerCard.innerHTML = '';
        const winLoseNoti = document.querySelector('#winLose')
        winLoseNoti.style.display = 'none';
        start();
        const nextGame = document.querySelector('#nextGame');
        nextGame.style.display = 'none';
        clickDouble.style.display = 'inline';
        clickStand.style.display = 'inline';
        clickHit.style.display = 'inline';
    } else {
        const form = document.querySelector('#form-bet');
        form.style.display = 'inline';
    };
});

// ? HIT

const clickHit = document.querySelector('#hit');
clickHit.addEventListener('click', function() {
    hit();
    if (allDetails.player.score > 20) {
        clickHit.style.display = 'none';
        winLose();
        const reverseBack = document.querySelector('#back');
        reverseBack.src = allDetails.dealer.deck[1].src;
    }
});

// ? STAND

const clickStand = document.querySelector('#stand');
clickStand.addEventListener('click', function() {
    stand();
    winLose();
});

// ? DOUBLE

const clickDouble = document.querySelector('#double');
clickDouble.addEventListener('click', function() {
    allDetails.player.deck.push(decks.shift());
    // count('player1');
    allDetails.player.chip -= allDetails.player.bet;
    allDetails.player.bet += allDetails.player.bet;
    chipBet();

    count('player');
    if (allDetails.player.score > 21) {
        winLose();
    } else {
        stand();
        const playerWeb = document.querySelector('#playerCard');
        const playerCard = document.createElement('img');
        playerCard.src = allDetails.player.deck[allDetails.player.deck.length-1].src;
        playerCard.style.width = '120px';
        playerCard.style.left = `${(allDetails.player.deck.length-1)*23}px`;
        playerWeb.appendChild(playerCard);
        clickDouble.style.display = 'none';
        winLose();
    }
    
});

const nextGame = document.querySelector('#nextGame');
nextGame.addEventListener('click', function () {
    scene.classList.remove('visible');
    scene.classList.add('hidden');
    const form = document.querySelector('#form-bet');
    form.style.display = 'inline';
    const winLoseNoti = document.querySelector('#winLose');
    winLoseNoti.style.display = 'none';
    nextGame.style.display = 'none';
});