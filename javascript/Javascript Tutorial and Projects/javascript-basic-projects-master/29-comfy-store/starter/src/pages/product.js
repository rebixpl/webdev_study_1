// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
// specific
import { addToCart } from "../cart/setupCart.js";
import { singleProductUrl, getElement, formatPrice } from "../utils.js";

// selections
const loading = getElement(".page-loading");
const centerDOM = getElement(".single-product-center");
const pageTitleDOM = getElement(".page-hero-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const companyDOM = getElement(".single-product-company");
const priceDOM = getElement(".single-product-price");
const colorsDOM = getElement(".single-product-colors");
const descDOM = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");

// cart product
let productID;

// show product when page loads
window.addEventListener("DOMContentLoaded", async function () {
  const urlID = this.window.location.search;
  //   console.log(urlID); //?id=rec43w3ipXvP28vog

  try {
    const response = await this.fetch(singleProductUrl + urlID);
    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();
    } else {
      console.log(response.status, response.statusText);
      centerDOM.innerHTML = `
      <div>
      <h3 class="error">sorry, something went wrong</h3>
      <br>
      <a href="index.html" class="btn">back home</a>
      </div>
      `;
    }
  } catch (error) {
    console.error(error);
  }

  loading.style.display = "none";
});
