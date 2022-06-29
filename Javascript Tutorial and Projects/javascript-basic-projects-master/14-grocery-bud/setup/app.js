// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery"); // input
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
/** @type {Element} */
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);
// clear items
clearBtn.addEventListener("click", clearItems);

// ****** FUNCTIONS **********
/**
 *
 * @param {Event} e
 */
function addItem(e) {
  e.preventDefault();
  const value = grocery.value; //console.log(value); // for example: eggs
  // in more serious projects we should use external libraries to
  // generate ids XD
  const id = new Date().getTime().toString(); // console.log(id); // 1656427129206

  // !value === (value !== "")
  // !editFlag === false
  if (value && !editFlag) {
    // add item to the list
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    // add id
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button class="edit-btn" type="button">
        <i class="fas fa-edit"></i></button
      ><button class="delete-btn" type="button">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
    // append child
    list.appendChild(element);
    // show container
    container.classList.add("show-container");
    // display alert
    displayAlert("item added to the list", "success");
    // add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value; // value === grocery.value // text from form input
    displayAlert("value changed successfully", "success");
    setBackToDefault();
    submitBtn.textContent = "submit";
  } else {
    // elmpty value
    displayAlert("please enter a valid value", "danger");
  }
}

// display alert
/**
 *
 * @param {String} text
 * @param {String} action
 */
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert after 1000 ms
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// delete items from container list
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
    // hide empty container
    container.classList.remove("show-container");
    displayAlert("list is now empty", "danger");
    // edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
    // remove items from local storage
    // localStorage.removeItem('list');
  }
}

// edit function
/**
 *
 * @param {Event} e
 */
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling; // title
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}

// delete function
/**
 *
 * @param {Event} e
 */
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement; // gorcery item
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item has been removed", "danger");
  setBackToDefault();
  removeFromLocalStorage(id);
}

// set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********
/**
 *
 * @param {String} id
 * @param {String} value
 */
function addToLocalStorage(id, value) {
  const grocery = { id: id, value: value }; // ES6 shorthand => {id, value}
  let items = returnLocalStorage();
  console.log(items);
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

/**
 *
 * @param {String} id
 */
function removeFromLocalStorage(id) {
  let items = returnLocalStorage();

  items = items.filter(function (item) {
    if (item.id === id) {
      return;
    } else {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(items));
}

/**
 *
 * @param {String} id
 * @param {String} value
 */
function editLocalStorage(id, value) {}
// localStorage API
// setItem
// getItem
// removeItem
// save as strings

function returnLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

// ****** SETUP ITEMS **********
