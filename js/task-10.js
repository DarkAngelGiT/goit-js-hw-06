function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

const inputRef = document.querySelector("#controls input"); // звернення до інпуту
const createBoxBtn = document.querySelector("[data-create]"); // звернення до кнопки створення елементів
const deleteBoxBtn = document.querySelector("[data-destroy]"); // звернення до кнопки видалення елементів
const boxes = document.querySelector("#boxes"); // звернення до діву куди будемо записувати створені елементи
let baseBoxSize = 30; // змінна початкового розміру елементів

