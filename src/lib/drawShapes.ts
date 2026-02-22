import type { Svg } from '@svgdotjs/svg.js';
import type { SeededRandom } from './random.ts';

function drawCircle(
	draw: Svg,
	foreground: string,
	background: string,
	x: number,
	y: number,
	squareSize: number,
	seededRandom: SeededRandom
) {
	const group = draw.group().addClass('draw-circle');

	let circleRadius = squareSize * 0.8;

	group
		.circle(circleRadius)
		.fill(foreground)
		.move(x + (squareSize - circleRadius) / 2, y + (squareSize - circleRadius) / 2);
}

function drawSquare(
	draw: Svg,
	foreground: string,
	background: string,
	x: number,
	y: number,
	squareSize: number,
	seededRandom: SeededRandom
) {
	const group = draw.group().addClass('draw-circle');

	let squareRadius = squareSize * 0.5;

	group
		.rect(squareRadius, squareRadius)

		.fill(foreground)
		.move(x + (squareSize - squareRadius) / 2, y + (squareSize - squareRadius) / 2)
		.rotate(45);
}

function drawPill(
	draw: Svg,
	foreground: string,
	background: string,
	x: number,
	y: number,
	squareSize: number,
	seededRandom: SeededRandom
) {
	const group = draw.group().addClass('draw-pill');

	const rectWidth = squareSize * seededRandom.random_array_element([0.5, 0.8]);
	const rectHeight = squareSize * 0.2;
	const angle = seededRandom.random_array_element([45, -45]);

	group
		.rect(rectWidth, rectHeight)
		.fill(foreground)
		.move(x + squareSize / 2 - rectWidth / 2, y + squareSize / 2 - rectHeight / 2)
		.rotate(angle);

	// Top circle
	group
		.circle(rectHeight)
		.fill(foreground)
		.move(
			x + squareSize / 2 - (rectWidth / 2) * Math.cos(deg2rad(angle)) - rectHeight / 2,
			y + squareSize / 2 - (rectWidth / 2) * Math.sin(deg2rad(angle)) - rectHeight / 2
		);

	// Bottom circle
	group
		.circle(rectHeight)
		.fill(foreground)
		.move(
			x + squareSize / 2 + (rectWidth / 2) * Math.cos(deg2rad(angle)) - rectHeight / 2,
			y + squareSize / 2 + (rectWidth / 2) * Math.sin(deg2rad(angle)) - rectHeight / 2
		);
}

function drawDots(
	draw: Svg,
	foreground: string,
	background: string,
	x: number,
	y: number,
	squareSize: number,
	seededRandom: SeededRandom
) {
	const group = draw.group().addClass('draw-dots');

	const circleRadius = squareSize * 0.15;

	const gap = squareSize * 0.25;

	const gridx = seededRandom.random_range(1, 3, true);

	const gridy = seededRandom.random_range(1, 3, true);

	for (let i = 0; i < gridx; i++) {
		for (let j = 0; j < gridy; j++) {
			group
				.circle(circleRadius)
				.fill(foreground)
				.move(
					x - circleRadius / 2 + i * gap + (squareSize - (gridx - 1) * gap) / 2,
					y - circleRadius / 2 + j * gap + (squareSize - (gridy - 1) * gap) / 2
				);
		}
	}
}

function drawRing(
	draw: Svg,
	foreground: string,
	background: string,
	x: number,
	y: number,
	squareSize: number,
	seededRandom: SeededRandom
) {
	const group = draw.group().addClass('draw-ring');

	const innerCircleRadius = squareSize * 0.55;
	const outerCircleRadius = squareSize * 0.8;

	group
		.circle(outerCircleRadius)
		.fill(foreground)
		.move(x + (squareSize - outerCircleRadius) / 2, y + (squareSize - outerCircleRadius) / 2);

	group
		.circle(innerCircleRadius)
		.fill(background)
		.move(x + (squareSize - innerCircleRadius) / 2, y + (squareSize - innerCircleRadius) / 2);
}

function deg2rad(degrees: number): number {
	return degrees * (Math.PI / 180);
}
export { drawCircle, drawSquare, drawPill, drawDots, drawRing };
