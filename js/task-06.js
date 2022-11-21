// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
//
//     Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//     Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const onBlur = function () {
    if (this.value.length === Number(this.dataset.length)) {
        this.classList.remove(`invalid`);
        this.classList.add(`valid`);
        return;
    } else {
        this.classList.remove(`valid`);
        this.classList.add(`invalid`);
    };
}

document.querySelector('#validation-input').addEventListener('blur', onBlur);
