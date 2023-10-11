function showItem(event) {
  event.preventDefault();
  let newListItem = inputForm.value;
  let newItem = document.createElement("li");
  newItem.textContent = newListItem;
  target.appendChild(newItem);
}

function clearAll() {
  target.innerHTML = "";
}

let inputForm = document.querySelector(".input");
let searchForm = document.querySelector(".search-form");
let submitButton = document.querySelector(".done");
let target = document.querySelector(".target");
searchForm.addEventListener("submit", showItem);
submitButton.addEventListener("click", showItem);

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearAll);
