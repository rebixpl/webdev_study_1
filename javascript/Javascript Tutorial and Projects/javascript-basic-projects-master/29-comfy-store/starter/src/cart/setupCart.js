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
  // add one to the item count
  displayCartItemCount();

  // display cart totals
  displayCartTotal();

  //set cart in local storage
  setStorageItem("cart", cart);

  // more stuff coming up
  openCart();
};

function displayCartItemCount() {
  const amount = cart.reduce((acc, item) => acc + item.amount, 0);
  cartItemCountDOM.textContent = amount;
}

function displayCartTotal() {
  let total = cart.reduce((acc, item) => acc + item.price * item.amount, 0);
  cartTotalDOM.textContent = `Total: ${formatPrice(total)}`;
}

function displayCartItemsDOM() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem);
  });
}

function setupCartFunctionality() {}

// this init function will be called every time we import setupCart.js ( so on every page )
const init = function () {
  // display amount of cart items
  displayCartItemCount();
  // display cart total
  displayCartTotal();
  // add all cart items to the DOM
  displayCartItemsDOM();
  // setup cart functionality
  setupCartFunctionality();
};
init();
