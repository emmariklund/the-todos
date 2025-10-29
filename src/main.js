import "./style.css";
import { Todo } from "./todo";
import { createHtml } from "./utils";

const handleClick = () => {
    const newTodo = new Todo("text");
    myList.push(newTodo);
    createHtml(myList);
}

const myList = [
    new Todo("to do-lista i JS"),
    new Todo("gruppuppgift i UX"),
    new Todo("JS-övningar"),
    new Todo("Träna mer!!")
]

createHtml(myList);

const divInput = document.getElementById("buttonClick");
if(divInput !== null) {
  divInput.addEventListener("click", handleClick);
}

