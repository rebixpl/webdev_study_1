// set initial count
let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    /** @type {DOMTokenList} */
    const classes = e.currentTarget.classList;

    if (classes.contains("increase")) {
      count++;
    } else if (classes.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else if (count === 0) {
      value.style.color = "#222";
    }

    value.textContent = count;
  });
});

//////////////////////////////

/**
 *
 * @param {Array} arr
 */
//  function a(arr) {
//   arr.
// }

/** @type {Array} */
// let a;
