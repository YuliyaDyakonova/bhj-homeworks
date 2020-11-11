'use strict'

const time = document.getElementById("timer");

function getCountdown() {
	time.textContent = timer.textContent - 1;

	if (time.textContent <= 0) {
		clearInterval(countdownId);
		alert('Вы победили в конкурсе!');
	}
} 

const countdownId = setInterval(getCountdown, 1000);

