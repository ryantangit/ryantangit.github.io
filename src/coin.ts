import * as THREE from 'three'
import { querySelectorVerbose } from './utils';

const coinFlipMode = querySelectorVerbose<HTMLSelectElement>("#coin-mode");


const coinFlipButton = querySelectorVerbose<HTMLButtonElement>(".coin-flip-button");
coinFlipButton?.addEventListener("click", () => {flipCoin(coinFlipMode.value)});

function flipCoin(coinFlipMode: string): void {
	const coinResult = flipCoinResult();
	switch (coinFlipMode) {
		case "Minimal": 
			flipCoinMinimalUpdate(coinResult);
			break;
		case "Deluxe":
			flipCoinDeluxeUpdate(coinResult);
			break;
	}
}

function flipCoinResult(): string {
	const randomNum = Math.random();
	return (randomNum < .5 ? "Tails" : "Heads");
}

function flipCoinMinimalUpdate(coinResult: string): void {
	const coinCanvasP = querySelectorVerbose<HTMLParagraphElement>("#coin-canvas-p");
	if (coinResult.slice(0, 5)  == coinCanvasP.innerHTML.slice(0, 5))  {
		coinCanvasP.innerHTML+= " again";
	} else {
		coinCanvasP.innerHTML= coinResult;
	}
	return
}

function flipCoinDeluxeUpdate(coinResult: string): void {
	const coinCanvas = querySelectorVerbose<HTMLCanvasElement>("#coin-canvas");
	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0xFFFFFF);
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 100);
	const renderer = new THREE.WebGLRenderer({antialias: true, canvas: coinCanvas});
	renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

	const geometry = new THREE.CylinderGeometry(3, 3, 1, 30);
	const TextureLoader = new THREE.TextureLoader();
	const headTexture = TextureLoader.load("../assets/coin_head.png");
	const tailTexture = TextureLoader.load("../assets/coin_tail.png");
	const headMaterial = new THREE.MeshPhongMaterial({map: headTexture});
	const tailMaterial = new THREE.MeshPhongMaterial({map: tailTexture});
	const sideMaterial = new THREE.MeshPhongMaterial({ color: 0xc49102 });
	const cylinder = new THREE.Mesh( geometry, [sideMaterial, headMaterial, tailMaterial]);
	scene.add(cylinder);

	const color = 0xFFFFFF;
	const intensity = 3;
	const left_top_light = new THREE.DirectionalLight(color, intensity);
	left_top_light.position.set(-1, 3, 2);
	scene.add(left_top_light);
	const left_bot_light = new THREE.DirectionalLight(color, intensity);
	left_bot_light.position.set(-1, -3, 2);
	scene.add(left_bot_light);
	camera.position.z = 10;
	
	renderer.render(scene, camera);
	let speed = 0;
	function animate(){
		cylinder.rotation.x += 0.01 * speed;
		cylinder.rotation.y += 0.03;
		renderer.render(scene, camera);
		if (speed != 30) {
			speed += 1;
		}
	}
	renderer.setAnimationLoop(animate);
}
