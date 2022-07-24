const getElement = (selection, all = false) => {
  if (all) {
    const elements = document.querySelectorAll(selection);
    if (elements.length !== 0) return [...elements]; // transform nodeList to an array, so we can use map method
  } else {
    const element = document.querySelector(selection);
    if (element) return element;
  }
  throw new Error(`ERROR: No element/s selected, selection: ${selection}`);
};

export default getElement;
