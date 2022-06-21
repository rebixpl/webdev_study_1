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
