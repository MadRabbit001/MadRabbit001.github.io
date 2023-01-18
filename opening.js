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

// let bg = document.querySelector(".footer");
let open = document.querySelector(".open");
let menu1 = document.querySelector(".one");
let menu2 = document.querySelector(".two");
let menu3 = document.querySelector(".three");
let menu4 = document.querySelector(".four");
let menu5 = document.querySelector(".five");
let menu6 = document.querySelector(".six");
let menu7 = document.querySelector(".seven");

let menu2A = document.querySelector(".twoA");
let menu2B = document.querySelector(".twoB");
let menu2B2 = document.querySelector(".twoB2");

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

//close all window
function closebg() {
  menu1.classList.add("hidden");
  menu2.classList.add("hidden");
  menu2A.classList.add("hidden");
  menu2B.classList.add("hidden");
  menu2B2.classList.add("hidden");
}
//first line of window : 7
function openWin1() {
  menu1.classList.toggle("hidden");
  menu2.classList.add("hidden");
  menu3.classList.add("hidden");
  menu4.classList.add("hidden");
  menu5.classList.add("hidden");
  menu6.classList.add("hidden");
  menu7.classList.add("hidden");
}

function openWin2() {
  menu2.classList.toggle("hidden");
  menu1.classList.add("hidden");
  menu3.classList.add("hidden");
  menu4.classList.add("hidden");
  menu5.classList.add("hidden");
  menu6.classList.add("hidden");
  menu7.classList.add("hidden");
}

function openWin3() {
  menu3.classList.toggle("hidden");
  menu1.classList.add("hidden");
  menu2.classList.add("hidden");
  menu4.classList.add("hidden");
  menu5.classList.add("hidden");
  menu6.classList.add("hidden");
  menu7.classList.add("hidden");
}

function openWin4() {
  menu4.classList.toggle("hidden");
  menu2.classList.add("hidden");
  menu3.classList.add("hidden");
  menu1.classList.add("hidden");
  menu5.classList.add("hidden");
  menu6.classList.add("hidden");
  menu7.classList.add("hidden");
}

function openWin5() {
  menu5.classList.toggle("hidden");
  menu2.classList.add("hidden");
  menu3.classList.add("hidden");
  menu4.classList.add("hidden");
  menu1.classList.add("hidden");
  menu6.classList.add("hidden");
  menu7.classList.add("hidden");
}

function openWin6() {
  menu6.classList.toggle("hidden");
  menu2.classList.add("hidden");
  menu3.classList.add("hidden");
  menu4.classList.add("hidden");
  menu5.classList.add("hidden");
  menu1.classList.add("hidden");
  menu7.classList.add("hidden");
}

function openWin7() {
  menu7.classList.toggle("hidden");
  menu2.classList.add("hidden");
  menu3.classList.add("hidden");
  menu4.classList.add("hidden");
  menu5.classList.add("hidden");
  menu6.classList.add("hidden");
  menu1.classList.add("hidden");
}

// second line of window : 3
function openSecWin2() {
  menu2A.classList.toggle("hidden");
  menu2.classList.toggle("hidden");
}

// function third line of window : 3
function openThrdWin2() {
  menu2B.classList.toggle("hidden");
  menu2A.classList.toggle("hidden");

  if (!menu2B2.classList.contains("hidden")) menu2B2.classList.add("hidden");
}

function openThrdWin2B() {
  menu2B2.classList.toggle("hidden");
  menu2A.classList.toggle("hidden");

  if (!menu2B.classList.contains("hidden")) menu2B.classList.add("hidden");
}
