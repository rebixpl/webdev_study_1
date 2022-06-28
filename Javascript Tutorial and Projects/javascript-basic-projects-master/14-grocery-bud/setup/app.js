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
    console.log("add item to the list");
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    console.log("empty value");
  }
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
