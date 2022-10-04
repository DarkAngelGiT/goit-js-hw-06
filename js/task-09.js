function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorRef = document.querySelector(".color");
const changeColorRef = document.querySelector(".change-color");
// const changeCurrentElem = document.querySelector(".widget");
const changeCurrentElem = document.querySelector("body");

const changeColor = () => {
  const randomColor = getRandomHexColor();
  changeCurrentElem.style.backgroundColor = randomColor;
  colorRef.textContent = randomColor;
};

changeColorRef.addEventListener("click", changeColor);
