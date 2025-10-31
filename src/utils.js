export const createHtml = (myList) => {
  const ulElement = document.getElementById("toDoList");
  ulElement.innerHTML = "";

  myList.forEach((todo, i) => {
    const li = document.createElement("li");
    li.className =
      "listItem list-group-item list-group-item-warning list-group-item-action";

    if (todo.done) {
      li.classList.remove("list-group-item-warning");
      li.classList.add("list-group-item-success", "done");
    }

    li.innerHTML = todo.text;

    li.addEventListener("click", () => {
      todo.done = !todo.done;
      localStorage.setItem("ToDo", JSON.stringify(myList));
      createHtml(myList);
    });

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash delete-icon";

    deleteIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      myList.splice(i, 1);
      localStorage.setItem("ToDo", JSON.stringify(myList));
      createHtml(myList);
    });

    li.appendChild(deleteIcon);
    ulElement.appendChild(li);
  });
};
