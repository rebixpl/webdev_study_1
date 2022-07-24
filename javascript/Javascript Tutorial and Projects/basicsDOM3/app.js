// window object = browser api
// it gives us a way to work with browser ( the tab that we are currently operating in)

// alert() is a browse method defined in window object
// technically we should write window.alert('xdd'); but we can omit window
// alert('xdd'); because the javascript will automatically look for this method
// in window object for us

console.dir(document); // shows all methods and properties we have in an object
// console.log(document) will only show us our html structure

// getElementById('element')
const h1 = document.getElementById("title");
h1.style.color = "red";

const btn = document.getElementById("btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";

// getElementsByTagName('tagname');
// node-list = array-like object
// index, length property, but not array methods

const headings = document.getElementsByTagName("h2");
headings[0].style.color = "yellow";
console.log(headings.length); // 2

const items = document.getElementsByTagName("li");
// transform node-list to array
items[2].style.color = "orange";
const betterItems = [...items];
betterItems[3].style.color = "violet";
// now we can use forEach on our new betterItems array
betterItems.forEach(function (item) {
  console.log(item);
});

// getElementsByClassName('classname');
// node-list = array-like object
// index, length property, but not array methods
const listItems = document.getElementsByClassName("special");
listItems[0].style.color = "aquamarine";

// querySelector('any css'); - selects single first element
// querySelectorAll('any css'); - selects all
// with querySelectorAll we can use forEach method
// with queryselectors we need to pass # for and ID and . for a class
const result3 = document.querySelector("#result");
result3.style.backgroundColor = "wheat";

const lastItem = document.querySelector("li:last-child");
console.log(lastItem);
lastItem.style.backgroundColor = "white";

const list = document.querySelectorAll(".special");

list.forEach(function (item) {
  console.log(item);
  item.style.color = "yellow";
});
