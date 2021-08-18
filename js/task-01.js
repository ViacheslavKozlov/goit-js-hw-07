const arrCategoriesRef = document.querySelectorAll('.item');
const quantityOfCategoriesRef = arrCategoriesRef.length;
console.log(`В списке ${quantityOfCategoriesRef} категории.`);

[...arrCategories].forEach((item) => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});