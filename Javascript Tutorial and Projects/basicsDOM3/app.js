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
