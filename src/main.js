import "./style.css";
import { Todo } from "./todo";
import { createHtml } from "./utils";

const myList = [
    new Todo("to do-lista i JS"),
    new Todo("gruppuppgift i UX"),
    new Todo("JS-övningar"),
    new Todo("Träna mer!!")
]

createHtml(myList);