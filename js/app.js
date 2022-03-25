const input = document.querySelector("#input-field");
const button = document.querySelector(".submit");
const todos = document.querySelector(".todos");
const heading = document.querySelector("#main-heading");
const deleteBtnF = document.querySelector("#deleteFirst");
const deleteBtnL = document.querySelector("#deleteLast");

const listOfToDos = [];

// Function to Loop through the array
function todosItems(arr) {
  let items = "";
  for (let i = 0; i < arr.length; i++) {
    items += `<li class="fs-3"> ${arr[i]} </li>`;
  }
  return items;
}

// Event listener to add new to dos to the list
button.addEventListener("click", function () {
  const item = input.value;
  listOfToDos.push(item);
  input.value = "";
  todos.innerHTML = todosItems(listOfToDos);
});

// Event listener to remove the first list item
deleteBtnF.addEventListener("click", function () {
  listOfToDos.shift();
  todos.removeChild(todos.firstChild);
});

// Event listener to remove the last list item
deleteBtnL.addEventListener("click", function () {
  listOfToDos.pop();
  todos.removeChild(todos.lastChild);
});
