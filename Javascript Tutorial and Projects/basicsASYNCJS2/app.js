// callbacks, promises, async / await
// in order to use await you need to put async in front of a function
// must have async
// await waits till the promise is resolved
// error handling  - try / catch
// async function returns a promise

// async function someFunction() {
//     await
// }

// const otherFunction = async() => {
//     await
// }

const heading1 = document.querySelector(".one");
const heading2 = document.querySelector(".two");
const heading3 = document.querySelector(".three");
const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  //   displayColor().then((data) => console.log(data));
  const result = await displayColor();
  console.log(result);
});

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    // if element does not exist we get a null
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`Element ${element} does not exist`));
    }
  });
}

async function displayColor() {
  try {
    await addColor(1000, heading1, "red");
    await addColor(2000, heading2, "green");
    await addColor(1000, heading3, "blue");
  } catch (err) {
    console.log(err);
  }

  // await will wait till the promise is resolved
  // so the code below works the same as the code above

  //   addColor(1000, heading1, "red")
  //     .then(() => addColor(2000, heading2, "green"))
  //     .then(() => addColor(1000, heading3, "blue"))
  //     .catch((err) => console.log(err));

  return "colors changed";
}
