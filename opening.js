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
  //first
  menu1.classList.add("hidden");
  //second
  menu2.classList.add("hidden");
  // menu2A.classList.add("hidden");
  // menu2B.classList.add("hidden");
  // menu2B2.classList.add("hidden");
  //third
  menu3.classList.add("hidden");
  menu4.classList.add("hidden");
  menu5.classList.add("hidden");
  menu6.classList.add("hidden");
  menu7.classList.add("hidden");
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
// function openSecWin2() {
//   menu2A.classList.toggle("hidden");
//   menu2.classList.toggle("hidden");
// }

// function third line of window : 3
// function openThrdWin2() {
//   menu2B.classList.toggle("hidden");
//   menu2A.classList.toggle("hidden");

//   if (!menu2B2.classList.contains("hidden")) menu2B2.classList.add("hidden");
// }

// function openThrdWin2B() {
//   menu2B2.classList.toggle("hidden");
//   menu2A.classList.toggle("hidden");

//   if (!menu2B.classList.contains("hidden")) menu2B.classList.add("hidden");
// }

const searchInput = document.getElementById("search-input");
const select = document.getElementById("my-select");
const options = select.options;

searchInput.addEventListener("input", function () {
  const searchValue = this.value.toLowerCase();
  for (let i = 0; i < options.length; i++) {
    if (options[i].innerHTML.toLowerCase().indexOf(searchValue) !== -1) {
      options[i].style.display = "block";
    } else {
      options[i].style.display = "none";
    }
  }
});

select.addEventListener("change", function () {
  if (this.value === "option1") {
    window.location.replace("priority.html#iis");
  } else if (this.value === "option2") {
    window.location.replace("priority.html#reciept");
  } else if (this.value === "option3") {
    window.location.replace("priority.html#image");
  } else if (this.value === "option4") {
    window.location.replace("priority.html#connect");
  } else if (this.value === "option5") {
    window.location.replace("priority.html#ip");
  } else if (this.value === "option6") {
    window.location.replace("priority.html#sync");
  } else if (this.value === "option7") {
    window.location.replace("priority.html#gift");
  }
  //    else if (this.value === "option8") {
  //   window.location.replace("priority.html#");
  // } else if (this.value === "option9") {
  //   window.location.replace("priority.html#reciept");}
  else if (this.value === "option10") {
    window.location.replace("priority.html#return");
  } else if (this.value === "option11") {
    window.location.replace("priority.html#dis");
  } else if (this.value === "option12") {
    window.location.replace("priority.html#hand");
  } else if (this.value === "option13") {
    window.location.replace("priority.html#worker");
  } else if (this.value === "option14") {
    window.location.replace("priority.html#print");
  }
  // else if (this.value === "option15") {
  //   window.location.replace("priority.html#");
  // }
  else if (this.value === "option16") {
    window.location.replace("priority.html#mg");
  } else if (this.value === "option17") {
    window.location.replace("priority.html#browser");
  } else if (this.value === "option18") {
    window.location.replace("priority.html#login");
  } else if (this.value === "option19") {
    window.location.replace("priority.html#setuser");
  } else if (this.value === "option20") {
    window.location.replace("priority.html#cer");
  } else if (this.value === "option21") {
    window.location.replace("priority.html#info");
  } else if (this.value === "option22") {
    window.location.replace("priority.html#order");
  } else if (this.value === "option23") {
    window.location.replace("priority.html#extension");
  } else if (this.value === "option24") {
    window.location.replace("priority.html#ern");
  } else if (this.value === "option25") {
    window.location.replace("priority.html#mput");
  } else if (this.value === "option26") {
    window.location.replace("priority.html#cash");
  } else if (this.value === "option27") {
    window.location.replace("priority.html#view");
  } else if (this.value === "option28") {
    window.location.replace("priority.html#nom");
  } else if (this.value === "option29") {
    window.location.replace("priority.html#allow");
  } else if (this.value === "option30") {
    window.location.replace("priority.html#pass");
  } else if (this.value === "option31") {
    window.location.replace("priority.html#sale");
  } else if (this.value === "option32") {
    window.location.replace("priority.html#down");
  } else if (this.value === "option33") {
    window.location.replace("priority.html#file");
  } else if (this.value === "option34") {
    window.location.replace("priority.html#sent");
  } else if (this.value === "option35") {
    window.location.replace("priority.html#log");
  } else if (this.value === "option36") {
    window.location.replace("priority.html#dump");
  } else if (this.value === "option37") {
    window.location.replace("priority.html#conf");
  } else if (this.value === "option38") {
    window.location.replace("priority.html#up");
  } else if (this.value === "option39") {
    window.location.replace("priority.html#back");
  } else if (this.value === "option40") {
    window.location.replace("priority.html#no");
  } else if (this.value === "option41") {
    window.location.replace("priority.html#stat");
  } else if (this.value === "option42") {
    window.location.replace("priority.html#branch");
  } else if (this.value === "option43") {
    window.location.replace("priority.html#cancel");
  }
});

// const searchInput = document.getElementById("search-input");
// const select = document.getElementById("my-select");
// const options = select.options;

// searchInput.addEventListener("input", function () {
//   const searchValue = this.value.toLowerCase();
//   for (let i = 0; i < options.length; i++) {
//     if (options[i].innerHTML.toLowerCase().indexOf(searchValue) !== -1) {
//       options[i].style.display = "block";
//     } else {
//       options[i].style.display = "none";
//     }
//   }
// });

// searchInput.addEventListener("focus", function () {
//   select.style.display = "block";
// });

// searchInput.addEventListener("blur", function () {
//   select.style.display = "none";
// });
