import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const btn = get(".btn");
const btns = get(".icon", true);

const showUser = async () => {
  // get user from API
  const person = await getUser();
  // display user
  console.log(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
