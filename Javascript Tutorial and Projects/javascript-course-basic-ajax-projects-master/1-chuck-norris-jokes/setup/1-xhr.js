const url = "https://api.chucknorris.io/jokes/random";

const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

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
      const { value: joke } = JSON.parse(xhr.responseText);
      content.textContent = joke;
    } else {
      console.log({
        status: xhr.status,
        readyState: xhr.readyState,
        text: xhr.statusText,
      });
    }
  };
}
