// JS is a single threaded, synchronous language

// Make Soup
// boil water 10 min
// chop carrots
// add carrots boil for 5 min
// chop onion
// add onion boil for 5 min
// BROWSER => fetch data, get geolocation, setTimeout, setTimer, etc

boilWater(1000); // because we user setTimeout ( BROWSER METHOD ), javascript
// is able to immediately go to the next line, and boilWater() will be executed
// in the background by a browser
console.log("chop carrots");
// JS will be busy for 10000 iterations
for (let i = 0; i < 10000; i++) {
  console.log("still busy");
}
// only after this iterations will complete, the setTimeout would be able to
// return result from browser back to JS => console.log("done");

// boiling...
// chop carrots
// (10000) still busy // even though execution of boilWater takes 1000 ms,
//....................// the console.log("done"); will be shown after 10000 ms (still busy)
// done

function boilWater(time) {
  console.log("boiling...");
  // setTimeout() is an asynchronous function, meaning that the timer
  // function will not pause execution of other functions in the
  // functions stack.
  // JS is synchronous, so setTimeout as well as other methods like fetch data
  // and setTime are BROWSER based, browser gives this functionality, not
  // the JS
  setTimeout(() => {
    console.log("done");
  }, time); // this 'time' is a minumum time, because if JS is executing code,
  // the browser would not be able to return the result of setTimeout() function
  // and it will need to wait till JS stops execution
}
