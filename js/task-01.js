
const categoryItem = document.querySelectorAll("li.item")
console.log("Number of categories:", categoryItem.length);

categoryItem.forEach(categ => {
  const liItem = categ.querySelector("h2");
  const itemCount = categ.querySelectorAll("li")
  console.log(`Category:`, liItem.textContent);
  console.log(`Elements:`, itemCount.length);
})

