const tasks = [
  "Washing the dog",
  "Finishing my Portfolio",
  "Finishing the CSS course",
];

const input = document.querySelector("#input-field").value;
const button = document.querySelector(".submit");
const lists = document.querySelector(".items");

for (let i = 0; i < tasks.length; i++) {
  lists.innerHTML = `<li>${tasks[i]}</li>`;
}
