export const createHtml = (myList) => {
  const ulElement = document.getElementById("toDoList");
  ulElement.innerHTML = "";

  console.log(myList);
  myList.forEach((todo, i) => {
    console.log(todo);

    const li = document.createElement("li");
    li.className = "listItem";
    li.innerHTML = todo.text;

    if (todo.done) {
      li.style.textDecoration = "line-through";
    }

    li.addEventListener("click", () => {
      todo.done = !todo.done;
      localStorage.setItem("ToDo", JSON.stringify(myList));
      createHtml(myList);
    });

    ulElement.appendChild(li);
  });
};
