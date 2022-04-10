let todos = [
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

render();

function addTodo() {
  const textbox = document.getElementById("todo-title");
  const title = textbox.value;

  const datePicker = document.getElementById("date-picker");
  const dueDate = datePicker.value;

  const id = "" + new Date().getTime(); // it won't work without 'new' keyword

  todos.push({
    title: title,
    dueDate: dueDate,
    id: id,
  });
  render();
}

function deleteTodo(event) {
  const deleteButton = event.target; // button the user has clicked
  const idToDelete = deleteButton.id;

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

  render();
}

function render() {
  // DOM (Document Object Model) => You can grab stuff from HTML
  // and it gets converted into a JavaScript Object
  const todoList = document.getElementById("todo-list");
  // reset list to be empty
  todoList.innerHTML = "";

  todos.forEach(function (todo) {
    const element = document.createElement("div");
    element.innerText = todo.title + " " + todo.dueDate;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style = "margin-left: 12px";
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);

    todoList.appendChild(element);
  });
}
