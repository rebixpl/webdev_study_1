// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback
// Promises are a way to handle asynchronous operations.
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");
const container = document.querySelector(".img-container");
const url = "https://source.unsplash.com/random";

btn.addEventListener("click", () => {
  loadImage(url)
    .then((image) => container.appendChild(image))
    .catch((err) => console.log(err));
});

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error("Error loading image from: " + url));
    });
    img.src = url;
  });
}

// const promise = new Promise((resolve, reject) => {
//   let value = true;
//   if (value) {
//     resolve(`value is true`); // this might be data from a server
//   } else {
//     reject(`there was an error, value is false`);
//   }
// });

// console.log(promise); // Promise {<fulfilled>: 'value is true'}

// promise
//   .then((data) => {
//     console.log(data); // value is true
//   })
//   .catch((err) => {
//     console.log(err); // there was an error, value is false
//   });
