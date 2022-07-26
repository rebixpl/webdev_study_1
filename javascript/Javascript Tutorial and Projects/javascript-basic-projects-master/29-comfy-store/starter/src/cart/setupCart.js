// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";

// set items
const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

let cart = getStorageItem("cart");

export const addToCart = (id) => {
  let item = cart.find((item) => item.id === id);
  if (!item) {
    // item is not in the cart
    let product = findProduct(id);
    // add item to the cart
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // add item to the cart DOM
    addToCartDOM(product);
  } else {
    // item is in the cart, update values
  }
  // more stuff coming up
  openCart();
};

// this init function will be called every time we import setupCart.js ( so on every page )
const init = function () {};
init();
