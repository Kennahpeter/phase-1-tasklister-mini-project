document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = e.target.elements["new-task-description"].value;
    buildToDo(task);
    form.reset();
  });
});

function buildToDo(todo) {
  const li = document.createElement("li");
  li.textContent = todo;
  document.querySelector("#tasks").appendChild(li);
}