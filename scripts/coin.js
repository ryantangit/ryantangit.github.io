const coinFlipButton = document.querySelector(".coin-flip-button");
coinFlipButton.addEventListener("click", flipCoin);

function flipCoin() {
	const coinFlipMode = document.querySelector("select[name=\"coin-mode\"]").value;
	switch (coinFlipMode) {
		case "Minimal": 
			flipCoinMinimal();
			break;
		case "Basic":
			break;
		case "Deluxe":
			break;
	}
}

function flipCoinMinimal() {
	const coinCanvas = document.querySelector(".coin-canvas");
	const coinResult = (Math.random() > .5) ? "Heads" : "Tails" ;
	if (coinResult  == coinCanvas.innerHTML.slice(0, 5))  {
		coinCanvas.innerHTML += " again";
	} else {
		coinCanvas.innerHTML = coinResult;
	}
}

