const grid = document.querySelector('.grid');

const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [ 
  'ben',
  'cr7',
  'gav',
  'lui',
  'luk',
  'mes',
  'nak',
  'och',
  'vla',
  'wer',
  'jud',
  'vid',
  'lee',
  'fai',
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if(disabledCards.length === 28){

    clearInterval(this.loop);
    alert(`Parabéns, ${spanPlayer.innerHTML}!. Seu tempo foi ${timer.innerHTML} Segundos`);
  }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secodCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secodCharacter){

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);
  }

}

const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal-card')){
    return;
  }

  if(firstCard === '' ){
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === ''){
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();
  }
}

const createCard = (characters) => {
  const card = createElement('div', 'card')
  const fr = createElement('div', 'face fr');
  const bk = createElement('div', 'face bk');

 fr.style.backgroundImage = `url('../images/resto-do-mundo/${characters}.jpg')`;

  card.appendChild(fr);
  card.appendChild(bk);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', characters);

  return card
}

const loadGame = () => {

  const duplicateCharacters = [ ...characters, ...characters ];
  const shuffledArray = duplicateCharacters.sort( () => Math.random() - 0.5 );

  duplicateCharacters.forEach((characters) => {
    
    const card = createCard(characters);
    grid.appendChild(card);
    
  })
}

const startTimer = () => {
 
  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;

  }, 1000)
}

window.onload = () => {
  const playerName = localStorage.getItem('player');
  spanPlayer.innerHTML = playerName;
  
  loadGame();
  startTimer();

}
