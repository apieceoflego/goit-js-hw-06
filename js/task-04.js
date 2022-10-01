let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const span = document.querySelector('#value');

const add = () => {
  counterValue += 1;
  span.textContent = counterValue;
};

const subtract = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};

incrementBtn.addEventListener('click', add);
decrementBtn.addEventListener('click', subtract);
