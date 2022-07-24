const displayButtons = (container, activeIndex, pages) => {
  let btns = pages.map((_, indexPage) => {
    return `<button class="page-btn ${
      activeIndex === indexPage ? "active-btn" : "null"
    }" data-index="${indexPage}">${indexPage + 1}</button>`;
  });

  btns.push(`<button class="next-btn">next</button>`);
  btns.unshift(`<button class="prev-btn">prev</button>`);

  container.innerHTML = btns.join(" ");
};

export default displayButtons;
