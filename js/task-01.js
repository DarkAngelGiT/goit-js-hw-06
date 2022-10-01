// знаходимо і повертаємо масив елементів з класом item
const categoryItem = document.querySelectorAll("li.item");
// знаходимо довжину масиву
console.log("Number of categories:", categoryItem.length);

// перебираємо масив елементів categoryItem
categoryItem.forEach(categ => {
  // знаходимо масив дочірніх елементів тегів h2
  const liItem = categ.querySelector("h2");
  // виводимо textContent заголовків знайденого масиву
  console.log(`Category:`, liItem.textContent);
  // знаходимо масив дочірніх елементів тегів li
  const itemCount = categ.querySelectorAll("li");
  // виводимо довжину знайденого масиву
  console.log(`Elements:`, itemCount.length);
});