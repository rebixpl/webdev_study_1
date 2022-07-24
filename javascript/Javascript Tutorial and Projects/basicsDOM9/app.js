// allows select dynamic elements
// event propagation - order of the events are fired
// event bubbling - clicked element first then bubbles up -- bubbling happens by default
// event capturing - first at he root and fires until reaches target
// capturing is similar to bubbling, but it happens from the root to the target element

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("current target: ", e.currentTarget);
  //   console.log("target: ", e.target);
  //   if (e.target.classList.contains("link")) {
  //     console.log("you clicked on the link");
  //   }
}

function stopPropagation(e) {
  console.log("you clicked on list ");
  e.stopPropagation();
}

// each of these events fired even though user only clicekd on link
container.addEventListener("click", showBubbling, { capture: true });
document.addEventListener("click", showBubbling, { capture: true });
window.addEventListener("click", showBubbling, { capture: true });
list.addEventListener("click", showBubbling, { capture: true });

// with event capturing => window > document > container > list
// without event capturing => list > container > document > window
