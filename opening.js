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

let open = document.querySelector(".open");
let menu1 = document.getElementById("one");
let menu2 = document.getElementById("two");

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

function openWin1() {
  menu1.classList.toggle("hidden");
  menu2.classList.add("hidden");
}
function openWin2() {
  menu2.classList.toggle("hidden");
  menu1.classList.add("hidden");
}
