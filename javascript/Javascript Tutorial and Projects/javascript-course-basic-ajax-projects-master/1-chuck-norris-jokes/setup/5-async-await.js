const url = "https://api.chucknorris.io/jokes/random";

const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const imgChuck = document.querySelector(".container img");

btn.addEventListener("click", async () => {
  try {
    const data = await fetch(url);
    const response = await data.json();
    displayData(response);
  } catch (err) {
    console.log(err);
  }
});

function displayData({ value: joke }) {
  imgChuck.classList.add("shake-img");
  //   const { value: joke } = data;
  content.textContent = joke;
  const random = Math.random() * 1000; // from 0ms to 1000ms
  setTimeout(() => {
    imgChuck.classList.remove("shake-img");
  }, random);
}
