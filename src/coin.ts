const coinFlipButton = document.querySelector(".coin-flip-button");
coinFlipButton?.addEventListener("click", flipCoin);

function flipCoin() {
	const coinFlipMode = document.querySelector<HTMLSelectElement>("select[name=\"coin-mode\"]")?.value;
	switch (coinFlipMode) {
		case "Minimal": 
			flipCoinMinimal();
			break;
		case "Deluxe":
			break;
	}
}

function flipCoinMinimal() {
	const coinCanvas = document.querySelector(".coin-canvas");
	if (!coinCanvas) {
		throw new Error("DOM queryselector: coin-canvas missing")
	}
	let coinResult = "";
	const randomNum = Math.random();
	if (randomNum <= .49) {
		coinResult = "Heads";
	}
	if (randomNum > .49 && randomNum < .51) {
		coinResult = "Landed on the side";
	}
	if (randomNum >= .51) {
		coinResult = "Tails";
	}
	if (coinResult.slice(0, 5)  == coinCanvas.innerHTML.slice(0, 5))  {
		coinCanvas.innerHTML += " again";
	} else {
		coinCanvas.innerHTML = coinResult;
	}
}

