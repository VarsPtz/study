// var elem1 = document.getElementById("first");
// console.log(elem1);

// var elem2 = document.getElementsByTagName("div");
// console.log(elem2);
// console.log(elem2[0]);

// var elem3 = document.getElementsByClassName("some");
// console.log(elem3);

// var elem4 = document.querySelectorAll("ul > li");
// console.log(elem4);

// var elem5 = document.querySelector("ul > li"); //Ищет первый элемент
// console.log(elem5);

var bgcolor = document.getElementById("first");
// bgcolor.style.background = "red";
// bgcolor.style.width = "350px";

var button = document.getElementById("button");

// button.onclick = function() {
//  bgcolor.style.background = "red";
//  bgcolor.style.width = "350px";
// }
// // Действовать будет последнее дейсвие
// button.onclick = function () {
//  bgcolor.style.background = "green";
//  bgcolor.style.width = "350px";
// }

function myFunc() {
 bgcolor.style.background = "red";
 bgcolor.style.width = "350px";
}
button.addEventListener("click", myFunc);