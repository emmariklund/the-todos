export const createHtml = (myList) => {
  const ulElement = document.getElementById("toDoList");
  ulElement.innerHTML = "";

  //console.log(myList);
  myList.forEach((todo, i) => {
    // console.log(todo);
    const li = document.createElement("li");
    li.className = "listItem list-group-item";
    li.innerHTML = todo.text;

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash delete-icon";

    deleteIcon.addEventListener("click", (event) => {
      event.stopPropagation();
      myList.splice(i, 1);
      localStorage.setItem("ToDo", JSON.stringify(myList));
      createHtml(myList);
    });

    li.addEventListener("click", () => {
      todo.done = !todo.done;
      localStorage.setItem("ToDo", JSON.stringify(myList));
      createHtml(myList);
    });

    if (todo.done) {
      li.className = "done";
    }

    li.appendChild(deleteIcon);
    ulElement.appendChild(li);
  });
};
