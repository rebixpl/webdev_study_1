// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback
// Promises are a way to handle asynchronous operations.
const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {});

const promise = new Promise((resolve, reject) => {
  let value = true;
  if (value) {
    resolve(`value is true`); // this might be data from a server
  } else {
    reject(`there was an error, value is false`);
  }
});

console.log(promise); // Promise {<fulfilled>: 'value is true'}

promise
  .then((data) => {
    console.log(data); // value is true
  })
  .catch((err) => {
    console.log(err); // there was an error, value is false
  });
