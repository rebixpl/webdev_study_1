import get from "./getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = get(".search-form");
const input = get('[name="drink"]');

form.addEventListener("keyup", function (e) {
  const value = input.value;
  e.preventDefault(); // prevent form from submitting every time we press the key up
  if (!value) return; // value in the input is null
  presentDrinks(baseURL + value);
});
