// JSON - Javascript Object Notation

const btn = document.querySelector(".btn");
const xhr = new XMLHttpRequest();
const url = "./api/people.json";

btn.addEventListener("click", () => {
  fetchData();
});

function fetchData() {
  xhr.open("GET", url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      //   const text = document.createElement("p");
      //   text.textContent = xhr.responseText;
      //   document.body.appendChild(text);
      const data = JSON.parse(xhr.responseText);
      const displayData = data
        .map((item) => {
          return `<p>${item.id}. ${item.name}</p>`;
        })
        .join("");
      const element = document.createElement("div");
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        readyState: xhr.readyState,
      });
    }
  };

  xhr.send();
}
