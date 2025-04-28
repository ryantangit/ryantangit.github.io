import * as THREE from 'three'
import { querySelectorVerbose } from './utils';

const coinFlipButton = querySelectorVerbose<HTMLButtonElement>(".coin-flip-button");
coinFlipButton?.addEventListener("click", flipCoin);

function flipCoin() {
	const coinFlipMode = querySelectorVerbose<HTMLSelectElement>("select[name=\"coin-mode\"]").value;
	switch (coinFlipMode) {
		case "Minimal": 
			flipCoinMinimal();
			break;
		case "Deluxe":
			flipCoinDeluxe();
			break;
	}
}

function flipCoinMinimal(): void {
	const coinCanvasP = querySelectorVerbose<HTMLParagraphElement>("#coin-canvas-p");
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
	if (coinResult.slice(0, 5)  == coinCanvasP.innerHTML.slice(0, 5))  {
		coinCanvasP.innerHTML+= " again";
	} else {
		coinCanvasP.innerHTML= coinResult;
	}
	return
}

function flipCoinDeluxe(): void {
	const coinCanvas = querySelectorVerbose<HTMLCanvasElement>("#coin-canvas");

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 100);
	const renderer = new THREE.WebGLRenderer({antialias: true, canvas: coinCanvas});
	renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

	const geometry = new THREE.CylinderGeometry(3, 3, 1, 30);
	const material = new THREE.MeshPhongMaterial( { color: 0xc49102 } );
	const cylinder = new THREE.Mesh( geometry, material );
	scene.add( cylinder );
	const color = 0xFFFFFF;
  const intensity = 3;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
	camera.position.z = 10;



	function animate(){
		cylinder.rotation.x += 0.01;
		cylinder.rotation.y += 0.01;
		renderer.render(scene, camera);
	}
	renderer.setAnimationLoop(animate);
}
