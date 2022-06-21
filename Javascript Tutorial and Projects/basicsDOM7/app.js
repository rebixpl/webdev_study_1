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

btn.addEventListener("click", function () {
  heading.classList.toggle("red");
});
