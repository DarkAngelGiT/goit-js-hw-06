// знаходимо і повертаємо масив елементів з класом item
const categoryItemRef = document.querySelectorAll("li.item");
// знаходимо довжину масиву
console.log("Number of categories:", categoryItemRef.length);

// перебираємо масив елементів categoryItem
categoryItemRef.forEach(categ => {
  // знаходимо масив дочірніх елементів тегів h2
  const liItemRef = categ.querySelector("h2");
  // виводимо textContent заголовків знайденого масиву
  console.log(`Category:`, liItemRef.textContent);
  // знаходимо масив дочірніх елементів тегів li
  const itemCountRef = categ.querySelectorAll("li");
  // виводимо довжину знайденого масиву
  console.log(`Elements:`, itemCountRef.length);
});