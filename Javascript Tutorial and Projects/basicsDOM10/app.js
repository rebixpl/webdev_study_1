// Event propagation example
// allows select dynamic elements
// event propagation - order the events are fired
// event bubbling - clicked element first then bubbles up -- default

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
// const heading = document.querySelector(".heading");

function sayHello() {
  console.log("say hello");
}

btn.addEventListener("click", function () {
  const element = document.createElement("h1");
  element.classList.add("heading");
  element.textContent = `i'm inside the container`;
  container.appendChild(element);
});

container.addEventListener("click", function (e) {
  // we use bubbling to check if target ( the element that was clicked )
  // contains
  if (e.target.classList.contains("heading")) {
    console.log("hello there");
  }
});

// heading.addEventListener("click", sayHello); // even after we added headings
// with a button we still cannot call addEventListener or get them with querySelector,
// because they were added dynamically

// FORMS
// submit event listener
// prevent default
// how to get a value
const form = document.getElementById("form");
const name = document.getElementById("name");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  // by default with forms after submitting we are sending the date to where
  // 'action' attribute tells and refreshing the page so to stop this we need
  // to prevent default
  e.preventDefault();

  console.log("form submitted");
  console.log(`name: ${name.value}`);
  console.log(`password: ${password.value}`);
});
