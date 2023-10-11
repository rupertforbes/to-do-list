function showItem(event) {
  event.preventDefault();
  console.log("Hello");
}

let searchForm = document.querySelector(".search-form");
let submitButton = document.querySelector(".done");
searchForm.addEventListener("submit", showItem);
submitButton.addEventListener("click", showItem);
