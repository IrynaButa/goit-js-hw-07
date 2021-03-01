// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientContainer = document.querySelector('#ingredients');
console.log(ingredientContainer);

const makeContainer = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');

    ingredientEl.textContent = ingredient;
    return ingredientEl;
  })
};
const elements = makeContainer(ingredients);
ingredientContainer.append(...elements)