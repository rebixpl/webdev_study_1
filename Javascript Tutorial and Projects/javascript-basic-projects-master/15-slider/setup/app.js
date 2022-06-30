const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

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
