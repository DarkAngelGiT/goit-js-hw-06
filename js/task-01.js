// знаходимо і повертаємо масив елементів li з класом item
const categoryItemRef = document.querySelectorAll("li.item");
// знаходимо довжину масиву
console.log("Number of categories:", categoryItemRef.length);

// перебираємо масив елементів categoryItem
categoryItemRef.forEach( (categ) => {  
  const liItemRef = categ.querySelector("h2"); // знаходимо дочірній елемент тег h2  
  console.log(`Category:`, liItemRef.textContent); // виводимо textContent h2    
  const itemCountRef = categ.querySelectorAll("li"); // знаходимо масив дочірніх елементів тегів li  
  console.log(`Elements:`, itemCountRef.length); // виводимо довжину знайденого масиву
});