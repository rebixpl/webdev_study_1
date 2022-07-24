// childNodes - returns all childNodes including whitespaces which is
// treated as a text node

// children
// firstChild
// lastChild

const result = document.querySelector("#result");

// returns a list of children including whitespaces (text)
const allChildren = result.childNodes;
console.log(allChildren); // NodeList(11) [text, li, text, li, text, li, text, li, text, li, text]

// returns list of children without whitespaces (text)
const children = result.children;
console.log(children); // HTMLCollection(5) [li, li, li, li, li]

console.log(result.firstChild); // #text (whitespace)
console.log(result.lastChild); // #text (whitespace)

// parentElement
const heading = document.querySelector("h2");
console.log(heading.parentElement); // <div class="second">...</div>

// we can chain parentElements
console.log(heading.parentElement.parentElement);

const parent = heading.parentElement;
parent.style.color = "red";

// previousSibling
// newxtSibling
// return whitespace
const first = document.querySelector(".first");
const second2 = first.nextSibling;
console.log(second2); // #text (whitespace) > it returns whitespace initially

const second3 = first.nextSibling.nextSibling; // not it will be correct next sibling
second3.style.color = "red";

const last = document.querySelector("#last");
const third = last.previousSibling.previousSibling;
console.log(third);
third.style.color = "blue";

console.log(last.nextSibling.nextSibling); // null

// previousElementSibling
// nextElementSibling
// those properties do not return a whitespace
const first2 = document.querySelector(".first");
first2.nextElementSibling.color = "yellow";

const last2 = document.querySelector("#last");
last2.previousElementSibling.color = "yellow";

// nodeValue
// textContext
// properties the are gonna allow us to acces a textcontent within the element
const item = document.getElementById("special");
console.log(item.firstChild.nodeValue); // this is a special content
const value = item.firstChild.nodeValue;

const easyValue = item.textContent;
console.log(easyValue); //  this is a special content
