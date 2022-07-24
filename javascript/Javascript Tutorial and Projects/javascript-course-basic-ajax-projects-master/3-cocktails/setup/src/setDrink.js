const setDrink = (section) => {
  section.addEventListener("click", function (e) {
    // prevent default behavior - navigating to different page (link clicked)
    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("drink", id);
  });
};

export default setDrink;
