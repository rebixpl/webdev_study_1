import fetchDrinks from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const urlID = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const id = localStorage.getItem("drink");

const presentDrink = async () => {
  if (!id) {
    // if there is no id in localStorage, navigate the user back to the index.html page
    window.location.replace("index.html");
  } else {
    const drink = await fetchDrinks(urlID + id);
    displayDrink(drink);
  }
};

window.addEventListener("DOMContentLoaded", presentDrink);

//4189
