/* -------------------------------------------------------------------------- */
/*                                  Варіант 1                                 */
/* -------------------------------------------------------------------------- */
const inputRef = document.querySelector("#validation-input");
// ===============

inputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == inputRef.dataset.length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
    
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
    
  }
});

/* -------------------------------------------------------------------------- */
/*                                  Варіант 2                                 */
/* -------------------------------------------------------------------------- */

// const classChange = (event) => {
//   if (event.currentTarget.value.length == inputRef.dataset.length) {
//     inputRef.classList.add("valid");
//     inputRef.classList.remove("invalid");
    
//   } else {
//     inputRef.classList.add("invalid");
//     inputRef.classList.remove("valid");
    
//   }
// };

// inputRef.addEventListener("blur", classChange);

/* -------------------------------------------------------------------------- */
/*                              Цікавіший варіант                             */
/* -------------------------------------------------------------------------- */

// const addRemoveClass = (remove, add) => {
//   inputRef.classList.remove(`${remove}`);
//   inputRef.classList.add(`${add}`);
// };

// const validInput = (event) => {
//   if (Number(inputRef.dataset.length) === event.currentTarget.value.length) {
//     return addRemoveClass("invalid", "valid");
//   }
//     return addRemoveClass("valid", "invalid");
  
// };

// inputRef.addEventListener("blur", validInput);