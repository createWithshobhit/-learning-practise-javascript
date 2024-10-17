
const addTaskButton = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
    const taskText = newTaskInput.value.trim(); // Get the value of the input field

    if (taskText !== '') {
        // Create a new list item (li) element
        const li = document.createElement('li');
        li.className = 'todo-item';

        // Create a text node with the task and append it to the li
        li.appendChild(document.createTextNode(taskText));

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.className = 'remove-task';
        removeButton.appendChild(document.createTextNode('Remove'));
        li.appendChild(removeButton);

        // Append the new task (li) to the to-do list (ul)
        todoList.appendChild(li);

        // Clear the input field after adding the task
        newTaskInput.value = '';

        // Add an event listener to the remove button
        removeButton.addEventListener('click', function () {
            todoList.removeChild(li);
        });
    }
}

// Add task when the button is clicked
addTaskButton.addEventListener('click', addTask);

// Optional: Add task when pressing "Enter"
newTaskInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
