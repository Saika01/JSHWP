//1 

window.addEventListener("DOMContentLoaded", function (e) {
  console.log("All tags are loaded");
});

//2

window.addEventListener("load", function (e) {
  console.log("The page is loaded");
});

//3

window.addEventListener("click", function (e) {
  let targetTag = String(e.target.tagName).toLowerCase();
  if (e.target.className === "super_element") {
    console.log(`Класс "super_element" присутствует в элементе "${targetTag}"`);
  } else {
    console.log(`Класс "super_element" отсутствует в элементе "${targetTag}"`);
  }
});

//4

window.addEventListener('mouseover', function (e) {
  if (e.target.tagName.toLowerCase() === 'textarea'){
    console.log("Вы навели на textarea.");
  }
});

//5

const ulElement = document.querySelector('ul');
ulElement.addEventListener('click', function (e) {
  if (e.target.tagName.toLowerCase() === 'button') {
    console.log(e.target.textContent);
  } 
});

//6
// Потому что всплывают сначала дочерние элементы

//7

const allLi = document.querySelectorAll('li');
for (let i = 1; i < allLi.length; i+=2) {
  allLi[i].style.backgroundColor = 'yellow';
}