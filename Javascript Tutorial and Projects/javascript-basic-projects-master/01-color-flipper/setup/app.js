const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "purple",
  "aquamarina",
  "yellowgreen",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomNum = getRandomNumber();
  // check if the color is the same as before, if it is then generate a
  // new random index until it is different from before
  while (randomNum === colors.indexOf(color.textContent)) {
    randomNum = getRandomNumber();
  }
  const randomColor = colors[randomNum];
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
  console.log(randomColor);
  console.log(randomNum);
});

function getRandomNumber() {
  // generate random number from 0 to colors.length -1 (because of indexes)
  return Math.ceil(Math.random() * colors.length) - 1;
}
