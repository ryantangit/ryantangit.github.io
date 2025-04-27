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
	const randomNum = Math.floor(Math.random() * 10) / 10; 
	console.log(randomNum);
	let coinResult;
	if (randomNum < .5) {
		coinResult = "Heads";
	}
	if (randomNum == .5) {
		coinResult = "Landed on the side";
	}
	if (randomNum > .5) {
		coinResult = "Tails";
	}

	if (coinResult.slice(0, 5)  == coinCanvas.innerHTML.slice(0, 5))  {
		coinCanvas.innerHTML += " again";
	} else {
		coinCanvas.innerHTML = coinResult;
	}
}

