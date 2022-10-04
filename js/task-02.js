const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listOfIngredients = ingredients.map(ingredient => {
  const navItemEl = document.createElement('li');
  navItemEl.textContent = ingredient;
  navItemEl.classList.add('item');
  return navItemEl;
});

const list = document.querySelector('#ingredients');
list.append(...listOfIngredients);
