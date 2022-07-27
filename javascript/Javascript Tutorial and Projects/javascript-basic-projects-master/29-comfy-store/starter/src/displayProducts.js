import { formatPrice } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";
import addToCartDOM from "./cart/addToCartDOM.js";

const display = (products, element, filters) => {
  // display products
  element.innerHTML = products
    .map((product) => {
      const { name, id, image, price } = product;
      return `<article class="product">
    <div class="product-container">
      <img src="${image}" class="product-img img" alt="featured product">
      <div class="product-icons">
        <a href="product.html?id=${id}" class="product-icon">
          <i class="fas fa-search"></i>
        </a>
        <button class="product-cart-btn product-icon" data-id="${id}">
          <i class="fas fa-shopping-cart"></i>
        </button>
      </div>
    </div>
    <footer>
      <p class="product-name">${name}</p>
      <h4 class="product-price">${formatPrice(price)}</h4>
    </footer>
  </article>`;
    })
    .join("");

  if (filters) return;
  // if we are using filters, we don't want to add the event listeners (because we alreaddy did that the first time)

  element.addEventListener("click", function (e) {
    const parent = e.target.parentElement;

    if (parent.classList.contains("product-cart-btn")) {
      addToCart(parent.dataset.id);
    }
  });
};

export default display;
