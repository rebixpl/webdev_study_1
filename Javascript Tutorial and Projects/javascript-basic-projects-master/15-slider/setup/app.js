const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  //   console.log(counter);
  //   console.log(slides.length);
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

/* .slide:nth-child(1){
  left: 0;
}
.slide:nth-child(2){
  left: 100%;
}
.slide:nth-child(3){
  left: 200%;
}
.slide:nth-child(4){
  left: 300%;
}
.slide{
  transform: translateX(-100%);
} */
/* negative value moves to left */
