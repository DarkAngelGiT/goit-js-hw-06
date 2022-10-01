const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const creatElem = document.createElement("li");
// creatElem.textContent = ingredients[0];
// creatElem.classList.add("item");
// console.log(creatElem);

// знаходимо і повертаємо елемент з ІD ingredients
const ingredientsRef = document.querySelector("#ingredients")

// створюємо стрілочну ф-цію для створення елементів сприску
const createIngredients = (ingredient) => {
  // перебираємо масив значень ingredients 
  return ingredient.map((item) => {
    // створюємо новий еле-нт
    const creatElem = document.createElement("li");
    // додаємо значення елементу масиву як текст в новий елемент списку
    creatElem.textContent = item;
    // додаємо клас елементу списку
    creatElem.classList.add("item");
    // повертаємо створений елемент
    return creatElem;
  });
};

// запуск створення елементів
const elements = createIngredients(ingredients);

// додаємо елементи на сторінку html + збираємо масив елементів за допомогою ...spread
ingredientsRef.append(...elements)

console.log(ingredientsRef);