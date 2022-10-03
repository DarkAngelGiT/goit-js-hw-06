let counterValue = 0; 

// вибираємо конкретний елемент за атрибутом data-action='decrement' 
// Обов"язково! одинарні лапки для value атрибуту!
const buttonDecrsRef = document.querySelector("[data-action='decrement']");
const buttonIncrsRef = document.querySelector("[data-action='increment']");

const counterDecrs = () => {
  counterValue -= 1;
  const elemValue = document.querySelector("span");
  elemValue.textContent = counterValue;
};
const counterIncrs = () => {
  counterValue += 1;
  const elemValue = document.querySelector("span");
  elemValue.textContent = counterValue;
};

buttonDecrsRef.addEventListener("click", counterDecrs);
buttonIncrsRef.addEventListener("click", counterIncrs);


