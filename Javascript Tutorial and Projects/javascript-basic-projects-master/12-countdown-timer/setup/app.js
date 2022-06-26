const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022, 5, 26, 17, 56, 30);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
let weekday = futureDate.getDay();
weekday = weekdays[weekday];
const date = futureDate.getDate(); // day of the month

giveaway.textContent = `giveway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;

// future time in ms
const futureTime = futureDate.getTime(); // Gets the time value in milliseconds.
console.log(futureTime); // 1658651400000

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t); // 2393893778
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSec = 1000;

  // calculate all value
  let days = t / oneDay;
  days = Math.floor(days);
  // console.log(`days: ${days}`);
  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(`hours: ${hours}`);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  // console.log(`minutes: ${minutes}`);
  let seconds = Math.floor((t % oneMinute) / oneSec);
  // console.log(`seconds: ${seconds}`);

  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.textContent = format(values[index]);
  });

  if (t < 0) {
    // the date has passed
    clearInterval(countdown); // stop counter
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
  }
}

// countdown
let countdown = setInterval(() => {
  getRemainingTime();
}, 1000);

getRemainingTime();
