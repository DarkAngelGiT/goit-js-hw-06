const formRef = document.querySelector(".login-form");


const formSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password } // об"єкт з короткими властивостями
  } = event.currentTarget;
  
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log({"Email: ": email.value, "Password: ": password.value});
  event.currentTarget.reset();
}

formRef.addEventListener("submit", formSubmit);