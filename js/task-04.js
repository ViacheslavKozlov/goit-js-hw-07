const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');

let counterValue = 0;
const counter = document.querySelector('#value');
counter.textContent = counterValue;

function decrement() {
    if (counterValue === 0) {
        return;
    }
    counterValue -= 1;
    counter.textContent = counterValue;
};
function increment() {
    counterValue += 1;
    counter.textContent = counterValue;
};
btnDecr.addEventListener('click', decrement);
btnIncr.addEventListener('click', increment);