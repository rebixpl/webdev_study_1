import people from "./data.js";

const container = document.querySelector(".slide-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set slides
container.innerHTML = people
  .map((person, index) => {
    const { img, job, name, text } = person;

    // more logic later
    let position = "last";
    if (index === 0) {
      position = "active";
    }
    if (index === people.length - 1) {
      position = "last";
    }

    return `<article class="slide ${position}">
    <img src="${img}"
      alt="${name}" class="img">
    <h4>${name}</h4>
    <p class="title">${job}</p>
    <p class="text">${text}</p>
    <div class="quote-icon">
      <div class="fas fa-quote-right"></div>
    </div>
  </article>`;
  })
  .join("");
