const CARDS = [
    {
        id: 1,
        name: 'javascript',
        img: '/images/js.webp'
    },
    {
        id: 2,
        name: 'css3',
        img: '/images/css.webp'
    },
    {
        id: 3,
        name: 'html5',
        img: '/images/html.webp'
    },
    {
        id: 4,
        name: 'python',
        img:
            '/images/python.webp'
    },
    {
        id: 5,
        name: 'c++',
        img: '/images/c.webp'
    },
    {
        id: 6,
        name: 'kotlin',
        img: '/images/kotlin.webp'
    },
    {
        id: 7,
        name: 'php',
        img:
            '/images/php.webp'
    },
    {
        id: 8,
        name: 'java',
        img:
            '/images/java.webp'
    },
    {
        id: 9,
        name: 'rust',
        img:
            '/images/rust.webp'
    },
    {
        id: 10,
        name: 'fortran',
        img:
            '/images/fortran.webp'
    },
    {
        id: 11,
        name: 'ruby',
        img:
            '/images/ruby.webp'
    },
    {
        id: 12,
        name: 'c#',
        img:
            '/images/cc.webp'
    }
];
const cardContainer = document.querySelector('.card-container');
const available = document.querySelector('#available');
const modalTitle = document.querySelector('#modal-title');
const modal = document.querySelector('#modal');
let currentCards = [...CARDS, ...CARDS];
let isPaused = false;
let counter = CARDS.length + 10;
let isLose = false;


function shuffle(array) {
    let counter = array.length,
        temp,
        index;
    while (counter > 0) {
        index = Math.floor(Math.random() * counter);
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

function win() {
    isPaused = true;
    modalTitle.innerHTML = 'You win!';
    modal.classList.add('modal--open');
}

function lose() {
    isLose = true;
    modalTitle.innerHTML = 'You lose';
    modal.classList.add('modal--open');
}

function handleClick(e) {
    const { target } = e;
    if (
        !isPaused &&
        !isLose &&
        !target.classList.contains('card--guessed') &&
        !target.classList.contains('card--picked')
    ) {
        isPaused = true;
        const picked = cardContainer.querySelector('.card--picked');
        if (picked) {
            if (picked.dataset.id === target.dataset.id) {
                target.classList.remove('card--picked');
                picked.classList.remove('card--picked');
                target.classList.add('card--guessed');
                picked.classList.add('card--guessed');
                isPaused = false;
            } else {
                target.classList.add('card--picked');
                setTimeout(() => {
                    target.classList.remove('card--picked');
                    picked.classList.remove('card--picked');
                    isPaused = false;
                }, 1500);
            }
            console.log('counter', counter);
            counter -= 1;
            available.innerHTML = counter;
            if (counter === 0) {
                lose();
            }
        } else {
            target.classList.add('card--picked');
            isPaused = false;
        }

        // Validate is already win
        const isWin = cardContainer.querySelectorAll('card--guessed').length === currentCards.length;
        if (isWin) {
            win();
        }
    }
}

function drawCards() {
    cardContainer.innerHTML = '';
    available.innerHTML = counter;

    shuffle(currentCards).forEach((el) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-id', el.id);
        card.innerHTML = `
          <div class="card__front">
            <img
              class="front__img"
              src="${el.img}"
              alt="${el.name}"
            />
            <h6 class="card__name">${el.name}</h6>
          </div>
          <div class="card__back">
            <img
              class="back__img"
              src="/images/code.webp"
              alt="Thought"
            />
          </div>
        `;
        card.addEventListener('click', handleClick);
        cardContainer.appendChild(card);
    });
}

document.querySelector('#play-again').addEventListener('click', function () {
    modal.classList.remove('modal--open');
    isPaused = false;
    isLose = false;
    counter = CARDS.length + 10;
    drawCards();
});

drawCards();