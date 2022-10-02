const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

// створюємо змінну куди записуємо дефолтний текст спану
const spanText = textOutput.textContent;
// console.log(spanText);

// додаємо слухача події на елемент інпут
textInput.addEventListener("input", (event) => {  
  if (event.currentTarget.value !== '') {
    // якщо інпут не пустий, записуємо в спан поточне значення з інпуту
    return textOutput.textContent = event.currentTarget.value;
  } 
  // інакше повертаємо дефолтне значення
  return textOutput.textContent = spanText;
});

