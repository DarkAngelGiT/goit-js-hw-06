const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

// const spanText = output.textContent;

textInput.addEventListener("input", (event) => {
  // output.textContent = event.currentTarget.value;
const spanText = output.textContent;
console.log(spanText);
  if (output.textContent === " ") {
    output.textContent = spanText;
  }
  output.textContent = event.currentTarget.value;

});

// if (output.textContent === "") {
//   output.textContent = spanText;
// }
