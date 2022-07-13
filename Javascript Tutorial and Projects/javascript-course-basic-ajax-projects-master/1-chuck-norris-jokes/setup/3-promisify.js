const url = "https://api.chucknorris.io/jokes/random";

const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const imgChuck = document.querySelector(".container img");

btn.addEventListener("click", () => {
  getData(url)
    .then((data) => {
      displayData(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

function getData(source) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", source);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          readyState: xhr.readyState,
          text: xhr.statusText,
        });
      }
    };
  });
}

function displayData(data) {
  imgChuck.classList.add("shake-img");
  const { value: joke } = JSON.parse(data);
  content.textContent = joke;
  const random = Math.random() * 1000; // from 0ms to 1000ms
  setTimeout(() => {
    imgChuck.classList.remove("shake-img");
  }, random);
}
