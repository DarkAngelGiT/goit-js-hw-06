function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`;
}

const inputRef = document.querySelector("#controls input"); // звернення до інпуту
const createBoxBtn = document.querySelector("[data-create]"); // звернення до кнопки створення елементів
const deleteBoxBtn = document.querySelector("[data-destroy]"); // звернення до кнопки видалення елементів
const boxes = document.querySelector("#boxes"); // звернення до діву куди будемо записувати створені елементи
let baseBoxSize = 30; // змінна початкового розміру елементів

// додаємо атрибут на інпут для врахування введеного числа (зміна поточного value)
const inputChange = (event) => {
  inputRef.setAttribute("count", event.currentTarget.value); 
};
inputRef.addEventListener("input", inputChange);

// функція створення елементів
const createBoxes = (amount) => {  
  amount = inputRef.getAttribute("count");
  for (let i = 0; i < amount; i++) {
    const randomColor = getRandomHexColor(); // отрумуємо Random колір
    baseBoxSize += 10;
    const newBox = document.createElement("div"); // створення нового елемента
    newBox.style.background = randomColor; // додаємо інлайнстилі
    newBox.style.height = baseBoxSize + "px";
    newBox.style.width = baseBoxSize + "px";
    newBox.style.margin = "10px";
    newBox.classList.add("new-box"); // додаємо однаковий клас на кожен елемент для майбутнього видалення
    boxes.append(newBox); // додаємо елемент в дів boxes
  }  
};
createBoxBtn.addEventListener("click", createBoxes);

// функція видалення елементів
const deleteBoxes = () => {
  const allNewBoxes = document.querySelectorAll(".new-box"); // шукаємо всі елементи(створені) з класом .new-box
  console.log("Deleted elements:", allNewBoxes.length);
  for (let allNewBoxe of allNewBoxes) { // перебираємо масив
    boxes.removeChild(allNewBoxe); // видаляємо всі дочірні елементи
  }
  baseBoxSize = 30; // скидаємо ромір елеметів
};
deleteBoxBtn.addEventListener("click", deleteBoxes);