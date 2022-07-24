// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   linksContainer.classList.toggle("show-links"); // simple navtoggle setup
  const containerHeight = linksContainer.getBoundingClientRect().height;
  // console.log(containerHeight); // 0 // 0 because we set height of parent div with class
  // '.links-container' inside css to 0
  const linksHeight = links.getBoundingClientRect().height;
  // console.log(linksHeight); // 201.5625

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = `0px`;
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // prevent default ( links will no longer scroll to the section)
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1); // for example href="#home"
    // slice cuts the '#' without modifying the original string
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 82) {
      position = position + containerHeight;
    }

    // scroll the page
    window.scrollTo({
      left: 0,
      top: position,
    });

    // after scrolling to the desired position, simply close the menu
    // ( because on mobile it takes halve of a screen real estate)
    linksContainer.style.height = 0;
  });
});
