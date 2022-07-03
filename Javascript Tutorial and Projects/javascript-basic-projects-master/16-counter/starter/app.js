function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Please check "${selection}" selector, no such element exists`
    );
  }
}

function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.startingValue = value;
  this.resetBtn = element.querySelector(".reset");
  this.increaseBtn = element.querySelector(".increase");
  this.decreaseBtn = element.querySelector(".decrease");
  this.valueDOM = element.querySelector(".value");
  this.valueDOM.textContent = this.value;
}

Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
  console.log(this);
};

Counter.prototype.reset = function () {
  this.value = this.startingValue;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 400);

firstCounter.increase();
firstCounter.decrease();
firstCounter.decrease();
firstCounter.reset();
firstCounter.decrease();
firstCounter.decrease();
firstCounter.reset();
