// CSS
const random = document.querySelector(".random");

random.style.textTransform = "capitalize";
random.classList.add("title");

// Click Event
// select element
// addEventListener()
// what event, what to do

const heading = document.querySelector("h2");
const btn = document.querySelector(".btn");

function changeColors() {
  //   heading.classList.toggle("red");
  let hasClass = heading.classList.contains("red");
  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}

btn.addEventListener("click", changeColors);

// Mouse Events
// click - fires after full action occurs, happens when both of mousedown and mouseup happens
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleave - moved out of an element

const heading2 = document.querySelector("h1");
const btn2 = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("click");
});

btn.addEventListener("mousedown", function () {
  console.log("mousedown");
});

btn.addEventListener("mouseup", function () {
  console.log("mouseup");
});

heading.addEventListener("mouseenter", function () {
  heading.classList.add("blue");
});

heading.addEventListener("mouseleave", function () {
  heading.classList.remove("blue");
});

// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released
const nameInput = document.getElementById("name");

nameInput.addEventListener("keypress", function () {
  console.log("keypress");
});

nameInput.addEventListener("keydown", function () {
  console.log("keydown");
});

nameInput.addEventListener("keyup", function () {
  console.log("keyup");
  console.dir(nameInput);
  console.log(nameInput.value);
});

// event object argument e,evt
// info about triggered event
// event.type
// event.currentTarget
// this Keyword
// preventDefault() - prevents default behaviour

const heading1 = document.querySelector(".heading1");
const btn3 = document.querySelector(".btn3");
const link = document.getElementById("link");

heading1.addEventListener("click", function (event) {
  console.dir(event);
  console.log(event.currentTarget); // <h1 class="heading1">some heading</h1>
  event.currentTarget.classList.toggle("blue");
});

btn3.addEventListener("click", function (event) {
  event.currentTarget.classList.toggle("blue");
  console.log(event.type); // click
});

// preventDefault() -
function someFunc(e) {
  e.preventDefaut();
}

link.addEventListener("click", someFunc);
// The preventDefault() method cancels the event if it is cancelable,
// meaning that the default action that belongs to the event will not occur.
// For example, this can be useful when:
// Clicking on a "Submit" button, prevent it from submitting a form
// Clicking on a link, prevent the link from following the URL

// document.getElementById("myAnchor").addEventListener("click", function(event){
//     event.preventDefault()
// });

// this keyword -
const heading4 = document.querySelector(".heading4");

console.log("-----------------------");

heading4.addEventListener("click", function (event) {
  console.dir(this); // h1.heading4
  console.log(event.currentTarget); // <h1 class="heading4">clik me to see how this works</h1>
  this.classList.toggle("red"); // this also works like event.currentTarget
});
