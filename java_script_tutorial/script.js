// MVC Model View(Render) Controller
// ----- Model -----
// If localstorage has a todos array, then use it, otwerwise use default array
let todos;

const savedTodos = JSON.parse(localStorage.getItem("todos"));

// Check is saveTodos is an array
if (Array.isArray(savedTodos)) {
  todos = savedTodos;
} else {
  todos = [
    {
      title: "Get groceries",
      dueDate: "2022-10-04",
      id: "id1",
    },
    {
      title: "Wash the dishes",
      dueDate: "2022-02-03",
      id: "id2",
    },
    {
      title: "Do the laundry",
      dueDate: "2022-03-01",
      id: "id3",
    },
    {
      title: "Make dinner",
      dueDate: "2022-06-21",
      id: "id4",
    },
  ];
}

render();

// Created a todo
function createTodo(title, dueDate) {
  const id = "" + new Date().getTime(); // it won't work without 'new' keyword

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id,
  });

  saveTodos();
}

// Deletes a todo
function removeTodo(idToDelete) {
  // filter() method creates a copy of original array, it doesn't modify the array itself
  todos = todos.filter(function (todo) {
    // If the id of this todo matches idToDelete, return false
    // for everything else return true
    if (todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });

  saveTodos();
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// ----- Controller -----
function addTodo() {
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;

  const datePicker = document.getElementById("date-picker");
  const dueDate = datePicker.value;

  createTodo(title, dueDate);

  render();
}

function deleteTodo(event) {
  const deleteButton = event.target; // button the user has clicked
  const idToDelete = deleteButton.id;

  removeTodo(idToDelete);

  render();
}

// ----- View(Render) -----
function render() {
  // DOM (Document Object Model) => You can grab stuff from HTML
  // and it gets converted into a JavaScript Object
  const todoList = document.getElementById("todo-list");
  // reset list to be empty
  todoList.innerHTML = "";

  todos.forEach(function (todo) {
    const element = document.createElement("div");
    element.innerText = todo.title + " " + todo.dueDate;
    element.classList.add("todoText");

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    deleteButton.classList.add("button");
    element.appendChild(deleteButton);

    todoList.appendChild(element);
  });
}
