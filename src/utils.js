export const createHtml = (myList) => {
  const ulElement = document.getElementById("toDoList");
  ulElement.innerHTML = "";

  console.log(myList);
  myList.forEach((todo, i) => {
    console.log(todo);

    const li = document.createElement("li");

    li.className = "listItem";
    li.innerHTML = todo.text;
    li.addEventListener("click", () => {
      myList.splice(i, 1);
      createHtml(myList);
    });

    ulElement.appendChild(li);
  });
};
