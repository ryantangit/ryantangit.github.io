
const coinFlipButton = document.querySelector(".coin-flip-button");
coinFlipButton.addEventListener("click", flipCoinWord);

function flipCoinWord() {
	const coinCanvas = document.querySelector(".coin-canvas");
	if (Math.random() > .5) {
		coinCanvas.innerHTML = "Heads";
	} else {
		coinCanvas.innerHTML = "Tails"
	}
}

