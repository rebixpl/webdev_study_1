const url = "https://api.chucknorris.io/jokes/random";

const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const imgChuck = document.querySelector(".container img");

btn.addEventListener("click", () => {
  getData(url);
});

function getData(source) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", source);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      imgChuck.classList.add("shake-img");
      const { value: joke } = JSON.parse(xhr.responseText);
      content.textContent = joke;
      const random = Math.random() * 1000; // from 0ms to 1000ms
      setTimeout(() => {
        imgChuck.classList.remove("shake-img");
      }, random);
    } else {
      console.log({
        status: xhr.status,
        readyState: xhr.readyState,
        text: xhr.statusText,
      });
    }
  };
}
