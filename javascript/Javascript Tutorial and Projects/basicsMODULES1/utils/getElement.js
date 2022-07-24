export default function (selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw Error(
      `You did not select element, or you have passed invalid selection: "${selection}"`
    );
  }
}
