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
