let noButton = document.querySelector("#move");

noButton.addEventListener("mouseover", function () {
let x = Math.random() * (window.innerWidth - noButton.offsetWidth);
let y = Math.random() * (window.innerHeight - noButton.offsetHeight);

noButton.style.position = "fixed";
noButton.style.left = x + "px";
noButton.style.top = y + "px";

});
