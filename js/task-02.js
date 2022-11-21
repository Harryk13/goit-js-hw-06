// HTML містить порожній список ul#ingredients.
//
// <ul id="ingredients"></ul>
//
// JavaScript містить масив рядків.
//
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
//
// Напиши скрипт, який для кожного елемента масиву ingredients:
//
//     Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//     Додасть назву інгредієнта як його текстовий вміст.
//     Додасть елементу клас item.
//     Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const $ul = document.querySelector('#ingredients');

const items = ingredients.map(str => {
  const $li = document.createElement('li');

  $li.classList.add('item');
  $li.innerText = str;

  return $li;
});


$ul.append(...items);
