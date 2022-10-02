const inputText = document.querySelector('#validation-input');
const minCharacters = 6;

inputText.addEventListener('blur', event => {
  if (event.currentTarget.value.length >= minCharacters) {
    inputText.classList.add('valid');
    inputText.classList.remove('invalid');
  } else {
    inputText.classList.add('valid');
    inputText.classList.add('invalid');
  }
});
