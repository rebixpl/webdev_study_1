// Web Storage API - provided by the browser
// session storage, local storage
// session storage - only persists data when the tab is open
// local storage - persists the data even after we close the browser
// setItem, getItem, removeItem, clear

// localStorage.setItem("name", "john");
// sessionStorage.setItem("name", "john");

localStorage.setItem("name", "john");
localStorage.setItem("friend", "peter");
localStorage.setItem("job", "developer");
localStorage.setItem("address", "Jana Pawła 2 21/37");

const address = localStorage.getItem("address");
console.log(address); //  Jana Pawła 2 21/37

// removes single item from storage
localStorage.removeItem("address");

// clears entire storage
// localStorage.clear();

// Local Storage with multiple values
// JSON.stringify(), JSON.parse()
const friends = ["waldemar", "peter", "bob"];

// localStorage.setItem("friends", friends);

// const values = localStorage.getItem("friends");
// console.log(values[0]); // j // notice that this is not an array anymore
// localStorage.removeItem("friends");

// store the value as an array
localStorage.setItem("friends", JSON.stringify(friends));
const values = JSON.parse(localStorage.getItem("friends"));
// ["waldemar", "peter", "bob"]
// 0: "waldemar"
// 1: "peter"
// 2: "bob"
console.log(values[0]); // waldemar

let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

fruits.push("apple");
localStorage.setItem("fruits", JSON.stringify(fruits));
