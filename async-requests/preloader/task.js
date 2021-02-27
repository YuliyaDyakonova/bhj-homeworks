const preloader = document.querySelector(".loader");
const rates = document.getElementById("items");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        preloader.classList.remove("loader_active");
        const response = JSON.parse(xhr.responseText).response.Valute;
        for (const key in response) {
            const rate = document.createElement('div');
            rate.classList.add("item");
            rate.innerHTML = `<div class="item__code">${response[key].CharCode}</div>
                              <div class="item__value">${response[key].Value}</div>
                              <div class="item__currency">руб.</div>`;
            rates.appendChild(rate);
        }
    }
};