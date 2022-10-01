const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

ingredients.forEach(ingredient => {
  const navItemEl = document.createElement('li');
  navItemEl.textContent = ingredient;
  navItemEl.classList.add('item');
  const list = document.querySelector('#ingredients');
  list.appendChild(navItemEl);
});
