// currentTarget - always refers to the element to which the event handler
// has been attached to
// target - identifies the element on which event occured

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.currentTarget); // <button class="btn" style='color: green;'>...</button>
    console.log(e.target); // <strong>more nested</strong>
    e.currentTarget.style.color = "green";
    e.target.style.color = "blue";
  });
});
