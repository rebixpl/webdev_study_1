import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrink = (data) => {
  hideLoading();
  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
    drink.strIngredient11,
    drink.strIngredient12,
    drink.strIngredient13,
    drink.strIngredient14,
    drink.strIngredient15,
  ];

  const img = get(".drink-img");
  const drinkName = get(".drink-name");
  const ingredients = get(".drink-ingredients");
  const description = get(".drink-desc");

  document.title = name;
  img.src = image;
  drinkName.textContent = name;
  description.textContent = desc;
  ingredients.innerHTML = list
    .map((ingredient) => {
      if (!ingredient) return;
      return `<li><i class="far fa-check-square"></i>${ingredient}</li>`;
    })
    .join("");
};

export default displayDrink;
