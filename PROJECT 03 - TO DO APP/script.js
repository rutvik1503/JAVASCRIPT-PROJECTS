// Initialize an empty array to store the tasks
const toDoList = [];

// Function to handle adding a new task
function submitTask() {
  // Get the input element where user types the task
  const input = document.getElementById("enterTask");
  // Get the value entered by the user
  const task = input.value;

  // Check if the input is not empty
  if (task) {
    // Add the new task to the toDoList array
    toDoList.push(task);
    // Clear the input field after adding the task
    input.value = "";

    // Update the displayed task list
    displayTasks();
  } else {
    // Alert the user to enter a task if the input is empty
    alert("Enter task first...");
  }
}

// Function to delete a task at a specific index
function deleteTask(index) {
  // Remove one element at the specified index from toDoList array
  toDoList.splice(index, 1);
  // Re-render the updated task list
  displayTasks();
}

// Function to display all tasks on the webpage
function displayTasks() {
  // Get the <ul> element where tasks will be displayed
  const list = document.getElementById("taskList");
  // Clear the current list so it can be refreshed
  list.innerHTML = "";

  // Loop through each task and its index in the toDoList array
  toDoList.forEach((task, index) => {
    // Create a new list item element
    const li = document.createElement("li");

    // Set the text of the list item to the task string
    li.innerText = task;

    // Create a delete button for this task
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    // Attach an event handler to the button that deletes this task when clicked
    deleteButton.onclick = () => deleteTask(index);

    // Add the delete button inside the list item
    li.appendChild(deleteButton);
    // Add the list item to the <ul> element
    list.appendChild(li);
  });
}
