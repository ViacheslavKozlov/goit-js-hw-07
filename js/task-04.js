let counterValue = 0;

function decrement() {
    counterValue -= 1;
    counter.textContent = counterValue;
};
function increment() {
    counterValue += 1;
    counter.textContent = counterValue;
};

const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');

const counter = document.querySelector('#value');
counter.textContent = counterValue;

btnDecr.addEventListener('click', decrement);
btnIncr.addEventListener('click', increment);