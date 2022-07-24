// getAttribute(attributeName);
// setAttribute(attributeName, attributeValue);

const first = document.querySelector(".first");
const classValue = first.getAttribute("class");
const idValue = first.getAttribute("id");
console.log(classValue); // first
console.log(idValue); // special

const link = document.querySelector("#link");
const showLink = link.getAttribute("href");
console.log(showLink); // ./first.html

const last = link.nextElementSibling;
last.setAttribute("class", "first");
last.textContent = "i also have a class of first";

const links = document.querySelectorAll(".first");
console.log(links); // NodeList(2) [li#special.first, li.first]

// createElement('element')
// createTextNode('text content')
// enement.appendChild(childElement)

const result = document.querySelector("#result");

// create empty element
const bodyDiv = document.createElement("div");

// create text node
const text = document.createTextNode("a simple body div appendChild");
bodyDiv.appendChild(text);

// this div element will be appended at the end of document body
// so right after <script src="app.js"></script>
document.body.appendChild(bodyDiv);

const heading = document.createElement("h2");
const headingText = document.createTextNode("dynamic heading");
heading.appendChild(headingText);
// dynamically add class to an element
heading.classList.add("blue");

result.appendChild(heading);

console.log(result.children);

// insertBefore('element', ;location')
const result2 = document.querySelector("#result2");
const first2 = document.querySelector(".red2");
const bodyDiv2 = document.createElement("div");

const text2 = document.createTextNode("a simple body div 2 insertBefore");
bodyDiv2.appendChild(text2);

// insertBefore('element', ;location')
document.body.insertBefore(bodyDiv2, result2);

const heading2 = document.createElement("h2");
const headingText2 = document.createTextNode("dynamic heading");
heading2.appendChild(headingText2);
heading2.classList.add("blue");

result2.insertBefore(heading2, first2);

// replaceChild('new','old');
const smallHeading = document.createElement("h6");
const smallText = document.createTextNode(`small heading text`);
smallHeading.classList.add("red");
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv2);

console.log(result2.children);
