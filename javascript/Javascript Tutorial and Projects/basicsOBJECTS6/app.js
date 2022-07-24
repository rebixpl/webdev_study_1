const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector(".increment");

// another solution
// btn.addEventListener("click", counter.increment.bind(counter));

// another working solution
// btn.addEventListener("click", function () {
//   counter.increment();
// });

// best solution
const increment = counter.increment.bind(counter);
btn.addEventListener("click", increment);
// btn.removeEventListener("click", increment);
