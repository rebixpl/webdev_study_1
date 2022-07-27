import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupSearch = (store) => {
  const form = getElement(".input-form");
  const nameInput = getElement(".search-input");
  form.addEventListener("keyup", function () {
    const value = nameInput.value;
    const productsContainer = getElement(".products-container");

    if (value) {
      const newStore = store.filter((product) => {
        if (product.name.toLowerCase().startsWith(value.toLowerCase())) {
          return product;
        }
      });
      display(newStore, productsContainer, true);

      if (newStore.length < 1) {
        productsContainer.innerHTML = `<h3 class="filter-error"> sorry, no products matched your search</h3>`;
      }
    } else {
      display(store, productsContainer, true);
    }
  });
};

export default setupSearch;
