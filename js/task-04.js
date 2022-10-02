let counterValue = 0; 

// вибираємо конкретний елемент за атрибутом data-action='decrement' 
// Обов"язково! одинарні лапки для value атрибуту!
const buttonDecrsRef = document.querySelector("[data-action='decrement']");
// console.log(buttonDecrsRef);
const buttonIncrsRef = document.querySelector("[data-action='increment']");
// console.log(buttonIncrsRef);

const counterDecrs = () => {
  // console.log("Button was clicked");
  counterValue -= 1;
  const elemValue = document.querySelector("span");
  elemValue.textContent = counterValue;
};
const counterIncrs = () => {
  // console.log("Button was clicked");
  counterValue += 1;
  const elemValue = document.querySelector("span");
  elemValue.textContent = counterValue;
};

buttonDecrsRef.addEventListener("click", counterDecrs);
buttonIncrsRef.addEventListener("click", counterIncrs);


