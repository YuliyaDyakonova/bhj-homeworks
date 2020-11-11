'use strict'

const holes = document.getElementsByClassName('hole');
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');


for (var i = 0; i < holes.length; i++) { 
	holes[i].onclick = setListner;	
}

function setListner() {
	if (this.className.includes('hole_has-mole')) {
		dead.textContent ++;
	} else {
		lost.textContent ++;
	}

	 checkWin();
}

function checkWin() {
    if (dead.textContent == 10) {
        alert('Победа!');
        setStart();
    }
    if (lost.textContent == 5) {
        alert('Вы проиграли!');
        setStart();
    }
}

function setStart() {
    dead.textContent = 0;
    lost.textContent = 0;
}