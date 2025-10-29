import "./style.css";
import { Todo } from "./todo";
import { createHtml } from "./utils";

const handleSubmit = (e) => {
  e.preventDefault();
  const text = document.getElementById("myInput").value;
  const newTodo = new Todo(text);
  myList.push(newTodo);
  createHtml(myList);
};

const myList = [
  new Todo("to do-lista i JS"),
  new Todo("gruppuppgift i UX"),
  new Todo("JS-övningar"),
  new Todo("Träna mer!!"),
];

createHtml(myList);

const form = document.getElementById("writeList");
if (form !== null) {
  form.addEventListener("submit", handleSubmit);
}

const input = document.getElementById("myInput");

input.innerHTML = localStorage.getItem("input");
