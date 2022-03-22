const input = document.querySelector("#input-field");
const button = document.querySelector(".submit");
const todos = document.querySelector(".todos");
const heading = document.querySelector("#main-heading");

// button.addEventListener("click", function () {
//   const item = document.createElement("li");
//   item.innerText = input.value;
//   todos.appendChild(item);
//   input.value = "";
//   item.addEventListener("click", function () {
//     item.style.textDecoration = "line-through";
//   });
//   item.addEventListener("dblclick", function () {
//     todos.removeChild(item);
//   });
// });

// BASIC TODO LIST PROGRAM

// =======================================

const listOfToDos = ["Washing the dog", "Training", "Cleaning"];

function todosItems(arr) {
  let items = "";
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

todos.innerHTML = todosItems(listOfToDos);
