// prepend - The Element.prepend() method inserts a set of Node objects or
// string objects before the first child of the Element.
// works similarly to append which inserts a set of Node objects or string
// objects after the last child of the Element.

const heading = document.createElement("h2");
heading.innerText = `i am dynamic heading`;

document.body.prepend(heading);

// remove - we call this on actual element we want to remove
// removeChild - requires a parent and then we remove specified child from the parent

const result = document.querySelector("#result");
// result.remove();

const heading2 = result.querySelector("h1");
result.removeChild(heading2);

// innerHTML
// textContent
const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(list.innerHTML); //     <li class="item">list item</li><li>list item</li>
console.log(list.textContent); // list item list item

function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}

const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">${randomNumber()}</li>
<li>${randomNumber()}</li><li>${randomNumber()}</li>`;
document.body.appendChild(ul);
