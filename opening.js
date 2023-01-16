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
let menu1 = document.querySelector(".one");
let menu2 = document.querySelector(".two");
let menu2A = document.querySelector(".twoA");
let menu2B = document.querySelector(".twoB");

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
//first line of window
function openWin1() {
  menu1.classList.toggle("hidden");
  menu2.classList.add("hidden");
}
function openWin2() {
  menu2.classList.toggle("hidden");
  menu1.classList.add("hidden");
  // menu2A.classList.add("hidden");
}
// second line of window
function openSecWin2() {
  menu2A.classList.toggle("hidden");
  menu2.classList.toggle("hidden");
}

// function third line of window
function openThrdWin2() {
  menu2B.classList.toggle("hidden");
  menu2A.classList.toggle("hidden");
  // menu2.classList.remove("hidden");
}
