function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBtn = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const spanRef = document.querySelector('.color');

colorBtn.addEventListener('click', changeColor);
function changeColor() {
  bodyRef.style.background = getRandomHexColor();
  spanRef.textContent = bodyRef.style.background;
}
