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
