/* -------------------------------------------------------------------------- */
/*                                  Варіант 1                                 */
/* -------------------------------------------------------------------------- */
const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.lenght == inputRef.dataset.lenght) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
    
  } else {
    inputRef.classList.add("invalid");    
    inputRef.classList.remove("valid");
    
  }
});

/* -------------------------------------------------------------------------- */
/*                              Цікавіший варіант                             */
/* -------------------------------------------------------------------------- */
const input = document.querySelector("#validation-input");

const addRemoveClass = (remove, add) => {
  input.classList.remove(`${remove}`);
  input.classList.add(`${add}`);
};

const validInput = (event) => {
  if (Number(input.dataset.length) === event.currentTarget.value.length) {
    return addRemoveClass("invalid", "valid");
  } 
    return addRemoveClass("valid", "invalid");
  
};

input.addEventListener("blur", validInput);

