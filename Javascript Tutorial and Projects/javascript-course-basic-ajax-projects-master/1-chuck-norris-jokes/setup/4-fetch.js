const url = "https://api.chucknorris.io/jokes/random";

const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const imgChuck = document.querySelector(".container img");

btn.addEventListener("click", () => {
  /* The Fetch API is a modern interface that allows you to make HTTP 
    requests to servers from web browsers.

    If you have worked with XMLHttpRequest (XHR) object, the Fetch API can 
    perform all the tasks as the XHR object does.

    In addition, the Fetch API is much simpler and cleaner. It uses the 
    Promise to deliver more flexible features to make requests to servers 
    from the web browsers. */

  fetch(url).then((data) =>
    data
      .json()
      .then((response) => displayData(response))
      .catch((err) => console.log(err))
  );
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
