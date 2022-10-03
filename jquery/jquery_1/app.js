// $(document).ready(function () {
//   $("h1").css("color", "red");
// });

// changing css
$("h1").css("color", "red");

document.querySelector("h1");
/// \/\/\/\/\/
$("h1");

document.querySelectorAll("button");
/// \/\/\/\/\/
$("button");

// getting css
console.log($("h1").css("color")); // rgb(255, 0, 0)

// adding and removing classes
$("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title");

// checking if the element has a class
console.log($("h1").hasClass("margin-50")); // true

// manipulating text
$("h1").text("Hello World");

// manipulating html (in all buttons at once)
$("button").html("<em>Hello, Click Me</em>");

// getting the attributes
console.log($("img").attr("src")); // https://preview.redd.it/ujomgpkatnt81.jpg?width=640&crop=smart&auto=webp&s=d0ff000fa1d83c087b04d4cbb436e6e3fb3bf80d
console.log($("h1").attr("class")); // big-title margin-50

// changing the attribute
$("a").attr("href", "https://cornhub.website/");

/// adding event listeners
$("h1").click(function () {
  $("h1").css("color", "purple");
});

// in plain js
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// in jQuery
$("button").click(function () {
  $("h1").css("color", "purple");
});

$("input").keypress(function (e) {
  console.log(e.key); // dsdfdsdsfdsf
});

$(document).keypress(function (e) {
  $("h1").text(e.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "green");
});

$("h1").before(`<button>Hello before</button>`);
$("h1").after(`<button>Hello after</button>`);
$("h1").prepend(`<button>Hello prepend</button>`);
$("h1").append(`<button>Hello append</button>`);

// removes element ( all elements )
$("button").remove();

$("h1").before(`<button>click me</button>`);
// animations in jquery
$("button").on("click", function () {
  // $("h1").hide(); // this animation hides an element
  // $("h1").show(); // this animation shows an element
  // $("h1").toggle(); // this animation hides and shows an element
  //
  // $("h1").fadeOut(); // first reduces the opacity of an element, then hides it
  // $("h1").fadeIn(); // the same as above, but shows an element instead of hiding it
  // $("h1").fadeToggle();
  //
  // $("h1").slideUp(); // collapses an element
  // $("h1").slideDown();
  // $("h1").slideToggle();
  //
  // animations
  // $("h1").animate({ opacity: 0.5 });
  // $("h1").animate({ margin: "20%" });
  //
  // chaining animations
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
