// Function to add a new todo
function submitTodo() {
    const newTodo = document.getElementById("add-todo").value;
  
    let todos = JSON.parse(localStorage.getItem("todos"));
  
    if (todos) {
        todos.push({
            id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
            name: newTodo,
            checked: false,
        });
    } else {
        todos = [
            {
                id: 0,
                name: newTodo,
                checked: false,
            },
        ];
    }
  
    localStorage.setItem("todos", JSON.stringify(todos));
  
    document.getElementById("add-todo").value = "";
  
    displayTodos();
}

// Function to display todos
function displayTodos() {
    const todos = JSON.parse(localStorage.getItem("todos"));
  
    let list = "";
  
    if (todos) {
        for (let i = 0; i < todos.length; i++) {
            list += `
                <ul class="list-group list-group-horizontal rounded-0 bg-transparent m-2">
                    <li class="list-group-item d-flex align-item-center">
                        <div class="form-check">
                            <input type="checkbox" name="" id="${todos[i].id}" class="form-check-input" ${todos[i].checked ? "checked" : ""} onchange="setComplete(this.checked, this.id)">
                        </div>
                    </li>
                    <li class="list-group-item d-flex align-item-center flex-grow-1">
                        <p class="lead fw-normal mb-0">${todos[i].name}</p>
                    </li>
                    <li class="list-group-item d-flex align-item-center flex-grow-1">
                        <button class="btn btn-danger" onclick="deleteTodo(${todos[i].id})">Delete</button>
                    </li>
                </ul>
            `;
        }
    }
  
    document.getElementById("list-todo").innerHTML = list;
}

// Function to update todo completion status
function setComplete(checked, id) {
    let todos = JSON.parse(localStorage.getItem("todos"));

    // Find the todo with the given id
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));

    if (todoIndex !== -1) {
        // Update the completion status of the todo
        todos[todoIndex].checked = checked;

        // Update the local storage with the modified todo list
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}


// Function to delete a todo
function deleteTodo(id) {
    let todos = JSON.parse(localStorage.getItem("todos"));

    // Filter out the todo with the given id
    todos = todos.filter(todo => todo.id !== id);

    // Update the local storage with the new todos list
    localStorage.setItem("todos", JSON.stringify(todos));

    // Refresh the displayed todos
    displayTodos();
}

// Initial display of todos when the page loads
displayTodos();
