const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

// створюємо змінну куди записуємо дефолтний spanValue
const spanValue = textOutput.textContent;

/* -------------------------------------------------------------------------- */
/*                                  ВАріант 1                                 */
/* -------------------------------------------------------------------------- */

const verification = (event) => {
  if (event.currentTarget.value !== '') {
    return textOutput.textContent = event.currentTarget.value;
  }
  return textOutput.textContent = spanValue;
};
textInput.addEventListener("input", verification)

/* -------------------------------------------------------------------------- */
/*                                  Варіант 2                                 */
/* -------------------------------------------------------------------------- */
// додаємо слухача події на елемент інпут
// textInput.addEventListener("input", (event) => {  
//   if (event.currentTarget.value !== '') {
//     return textOutput.textContent = event.currentTarget.value;
//   } 
//   return textOutput.textContent = spanValue;
// });