import {
	addBall,
	GameLoop,
	karel_y,
	karel_x,
	move,
	start,
} from "./src/lib/commands.js";
import { NodeRef } from "./src/lib/ericchase/Web API/Node_Utility.js";

const karel = document.querySelector("#karel") as HTMLElement;
const scene = document.querySelector("#scene") as HTMLElement;

function drawKarel() {
	karel.style.left = `${4 + 4 + karel_x * 69}px`; // border + missing width/2
	karel.style.top = `${4 + 4 + karel_y * 69}px`; // border + missing height/2
}

const domParser = new DOMParser();
const parseHTML = (html: string) => {
	return domParser.parseFromString(html, "text/html");
};

function createBall(x: number, y: number) {
	const ball = addBall(
		NodeRef(
			parseHTML(
				`<div class="ball"><img src="./assets/ball.png" alt="ball" /></div>`,
			).body.children[0],
		),
		x,
		y,
	);
	karel.before(ball.as(HTMLElement));
	ball.style.left = `${4 + 5 + x * 69}px`; // border + missing width/2
	ball.style.top = `${4 + 5 + y * 69}px`; // border + missing height/2
}

GameLoop.subscribe(() => {
	drawKarel();
});

createBall(1, 9);
createBall(4, 9);
createBall(5, 9);
createBall(8, 9);
createBall(9, 9);

start(0, 9);
move();
move();
move();
move();
move();
move();
move();
move();
move();
