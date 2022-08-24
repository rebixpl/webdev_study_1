const slider = document.querySelector("input");
const progressBar = document.querySelector(".progress-bar");
const thumb = document.querySelector(".thumb");
const slideIcon = document.querySelector(".slide-icon");
const body = document.querySelector("body");

slider.oninput = () => {
  let value = slider.value;
  thumb.style.left = value + "%";
  progressBar.style.width = value + "%";

  if (value < 20) {
    slideIcon.style.marginTop = "0px";
    body.classList.add("angry");
    body.classList.remove("confuse");
    body.classList.remove("like");
  }
  if (value >= 20) {
    slideIcon.style.marginTop = "-150px";
    body.classList.remove("angry");
    body.classList.add("confuse");
    body.classList.remove("like");
  }
  if (value >= 40) {
    slideIcon.style.marginTop = "-300px";
  }
  if (value >= 60) {
    slideIcon.style.marginTop = "-450px";
    body.classList.remove("angry");
    body.classList.remove("confuse");
    body.classList.add("like");
  }
  if (value >= 80) {
    slideIcon.style.marginTop = "-600px";
  }
};
