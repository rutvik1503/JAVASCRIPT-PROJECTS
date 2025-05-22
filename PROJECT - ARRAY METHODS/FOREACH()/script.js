const toDoList = [];

function submitTask() {
  const input = document.getElementById("enterTask");
  const task = input.value;

  if (task) {
    toDoList.push(task);
    input.value = "";

    displayTasks();
  } else {
    alert("Enter task first...");
  }
}

function deleteTask(index) {
  toDoList.splice(index, 1); // Remove the task by index
  displayTasks(); // Re-render tasks
}

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = ""; // Clear existing tasks

  toDoList.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerText = task;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => deleteTask(index);

    li.appendChild(deleteButton);
    list.appendChild(li);
  });
}
