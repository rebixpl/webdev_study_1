// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery"); // input
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);

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
    // append child
    list.appendChild(element);
    // display alert
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add("show-container");
    // add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    console.log("editing");
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

// set back to default
function setBackToDefault() {
  console.log("setBackToDefault");
}

// ****** LOCAL STORAGE **********
/**
 *
 * @param {String} id
 * @param {String} value
 */
function addToLocalStorage(id, value) {
  console.log("added to local storage");
}

// ****** SETUP ITEMS **********
