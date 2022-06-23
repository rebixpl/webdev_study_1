//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", buttonClicked);
});

/**
 *
 * @param {Event} e
 */
function buttonClicked(e) {
  /** @type {Element}*/
  const questionEl = e.currentTarget.parentElement.parentElement;
  questionEl.classList.toggle("show-text");
}
