const categoriesList = document.querySelectorAll('.item');
const categoriesAmount = categoriesList.length;
console.log(`В списке ${categoriesAmount} категории.`);

[...categoriesList].forEach((item) => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});