// tagged template literals
const author = "Some Author";
const statement = "Some Statement";

// we add function before string literal
const quote = highlight`Here is the ${statement} by ${author} and it could not be more true`;

const result = document.getElementById("result");
result.innerHTML = quote;

// ...vars - collecting all arguments into an array
function highlight(text, ...vars) {
  console.log({ text, vars });
  const awesomeText = text.map((item, index) => {
    // vars[index] || "" => if vars with this index does not exist (false) then return empty string
    return `${item} <strong class="blue">${vars[index] || ""}</strong>`;
  });
  return awesomeText.join("");
}
