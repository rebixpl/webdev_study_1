const people = [
  { name: "john", job: "developer" },
  { name: "susan", job: "designer" },
  { name: "anna", job: "boss" },
];

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

const showPeople = () => {
  const newPeople = people
    .map((person) => {
      // console.log(person); // {name: 'anna', job: 'boss'}
      const { name, job } = person;
      return `<p>${name} <strong>${job}</strong></p>`;
    })
    .join("");
  // .join(separator) - Adds all the elements of an array into a string,
  // separated by the specified separator string.
  //console.log(newPeople); // <p>john <strong>developer</strong></p><p>susan <strong>designer</strong></p><p>anna <strong>boss</strong></p>
  container.innerHTML = newPeople;
};

btn.addEventListener("click", () => {
  showPeople();
});
