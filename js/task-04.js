let counterValue = 0; 

const buttonDecrsRef = document.querySelectorAll("button")[0];
// console.log(buttonDecrsRef);
const buttonIncrsRef = document.querySelectorAll("button")[1];
// console.log(buttonIncrsRef);

const counterDecrs = () => {
  console.log("Button was clicked");
  counterValue -= 1;
  const elemValue = document.querySelector("span");
  elemValue.textContent = counterValue;
};
const counterIncrs = () => {
  console.log("Button was clicked");
  counterValue += 1;
  const elemValue = document.querySelector("span");
  elemValue.textContent = counterValue;
};

buttonDecrsRef.addEventListener("click", counterDecrs);
buttonIncrsRef.addEventListener("click", counterIncrs);


