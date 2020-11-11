
'use strict'

const image = document.getElementById("cookie");
let clicks = document.getElementById("clicker__counter");

image.onclick = clickHandler;

function clickHandler() {
	clicks.textContent ++;
	image.width = 230;
	setTimeout(() => image.width = 200, 100);
}