function showItem(event) {
  event.preventDefault();
  let newItem = inputForm.value;
  target.innerHTML = `<li>${newItem}</li>`;
}

let inputForm = document.querySelector(".input");
let searchForm = document.querySelector(".search-form");
let submitButton = document.querySelector(".done");
let target = document.querySelector(".target");
searchForm.addEventListener("submit", showItem);
submitButton.addEventListener("click", showItem);
