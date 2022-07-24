// JS is a single threaded, synchronous language

// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER => fetch data, get geolocation, setTimeout, setTimer, etc

// callbacks, promises, async / await

boilWater();
console.log("chop carrots");

function boilWater() {
  console.log("boiling...");
  setTimeout(() => {
    console.log("done");
    console.log("add carrots");
    setTimeout(() => {
      console.log("carrots done");
      console.log("add onions");
      setTimeout(() => {
        console.log("onion done");
      }, 500);
    }, 500);
  }, 1000);
}
