const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector('#text');

// ==================================================
// inputRef.addEventListener("input", (event)=>{
//   textRef.style.fontSize = `${event.currentTarget.value}px`;
// });

// ==================================================
const changeSize = (event)=>{
  textRef.style.fontSize = `${event.currentTarget.value}px`;
};

inputRef.addEventListener("input", changeSize);
