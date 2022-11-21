// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
//
// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>
//
// <div id="boxes"></div>
//
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
//
//     Розміри найпершого <div> - 30px на 30px.
//     Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//     Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
//
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

const $input = document.querySelector('input');
const $boxes = document.querySelector("#boxes");


function onClickCreate() {
  const inputValue = $input.value;

  createBoxes(inputValue);
}

function createBoxes(number) {
  const divs = [];

  for (let i = 0, size = 30; i < number; i++, size += 10) {
    const $div = document.createElement("div");

    $div.style.backgroundColor = getRandomHexColor();
    $div.classList.add('box');
    $div.style.height = `${size}px`;
    $div.style.width = `${size}px`;
    divs.push($div);
  }
  $boxes.append(...divs);
}

document.querySelector('[data-create]').addEventListener('click', onClickCreate);

function onClickDelete() {
  document.querySelectorAll(".box").forEach((element) => element.remove());
}

document.querySelector('[data-destroy]').addEventListener('click', onClickDelete);

