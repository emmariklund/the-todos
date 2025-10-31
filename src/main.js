import "./style.css";
import { Todo } from "./todo";
import { createHtml } from "./utils";

const handleSubmit = (e) => {
  e.preventDefault();
  const input = document.getElementById("myInput");
  const text = input.value.trim();

  if (text === "") return;

  const newTodo = new Todo(text);
  myList.push(newTodo);
  localStorage.setItem("ToDo", JSON.stringify(myList));
  createHtml(myList);

  input.value = "";
};

const form = document.getElementById("writeList");
if (form !== null) {
  form.addEventListener("submit", handleSubmit);
}

const storedList = localStorage.getItem("ToDo");

let myList = [];

if (storedList) {
  myList = JSON.parse(storedList);
} else {
  myList = [
    new Todo("to do-lista i JS"),
    new Todo("gruppuppgift i UX"),
    new Todo("JS-övningar"),
    new Todo("Träna mer!!"),
  ];
}

createHtml(myList);

const sortButton = document.getElementById("sortButton");

if (sortButton) {
  sortButton.addEventListener("click", () => {
    myList.sort((a, b) =>
      a.text.localeCompare(b.text, "sv", { sensitivity: "base" })
    );

    localStorage.setItem("ToDo", JSON.stringify(myList));

    createHtml(myList);
  });
}
