const button = document.querySelector("#luckyButton");
const logo = document.querySelector("#logo");

button.addEventListener('click', ChangeBackground)
function ChangeBackground() {
	logo.classList.toggle("oddity");
}