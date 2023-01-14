// let button = document.getElementById("show");
// let div = document.getElementById("show-me");

// button.addEventListener("click", function () {
//   if (div.style.display === "none") {
//     div.style.display = "block";
//   } else {
//     div.style.display = "none";
//   }
// });
let mad = document.querySelector(".hey");
let game = document.querySelector(".game");

function rabbit() {
  game.classList.toggle("hidden");
  setTimeout(niceshadow, 200);
  setTimeout(badshadow, 400);
}

function niceshadow() {
  mad.setAttribute("style", "box-shadow: inset 2px 2px 5px #333");
}

function badshadow() {
  mad.setAttribute(
    "style",
    "box-shadow: 2px 2px 5px #333, -2px -2px 5px #333;"
  );
}
