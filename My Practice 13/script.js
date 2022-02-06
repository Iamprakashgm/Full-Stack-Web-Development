//Window Object

// let myWindow = window.open("", "My Window", "resizable,scrollbars"); //opens new window
// myWindow.resizeTo(400, 400); //resizes the new window
// setTimeout(() => {
//   myWindow.moveTo(100, 100); //moves the new window
// }, 8000);
//we can access the new window and modify them as we want

let openwindow = document.getElementById("openwindow");
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let focusNewWindow = document.getElementById("focusNewWindow");

openwindow.addEventListener("click", function (event) {
  event.preventDefault();
  let newWindow = window.open("", "My Window", "resizable,scrollbars"); //opens new window
});

form1.addEventListener("submit", function (event) {
  event.preventDefault();
  let Xlength = form1.elements.xlength.value;
  let Ylength = form1.elements.ylength.value;
  //console.log(Xlength, Ylength);
  newWindow.resizeTo(Xlength, Ylength);
});

form2.addEventListener("submit", function (event) {
  event.preventDefault();
  let Xlength = form2.elements.xlength.value;
  let Ylength = form2.elements.ylength.value;
  //console.log(Xlength, Ylength);
  newWindow.moveBy(Xlength, Ylength);
});

form3.addEventListener("submit", function (event) {
  event.preventDefault();
  let Xlength = form3.elements.xlength.value;
  let Ylength = form3.elements.ylength.value;
  //console.log(Xlength, Ylength);
  newWindow.moveTo(Xlength, Ylength);
});

focusNewWindow.addEventListener("click", function (event) {
  event.preventDefault();
  newWindow.focus();
});
