const dropdownList = document.querySelector(".dropdown__list");
const dropdownValue = document.querySelector(".dropdown__value");

dropdownValue.addEventListener("click", dropdown);

function dropdown() {
    if (dropdownList.className.includes("dropdown__list_active")) {
        dropdownList.classList.remove("dropdown__list_active");
    } else {
        dropdownList.classList.add("dropdown__list_active")
    }
}

dropdownList.onclick = function (event) {
    event.preventDefault();
    dropdownValue.textContent = event.target.textContent;
    dropdown();
};