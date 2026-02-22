import { TinyColor } from '@ctrl/tinycolor';
import type { SeededRandom } from './random.ts';

function getForegroundFromBackground(color: string): string {
	return new TinyColor(color).brighten(15).spin(70).desaturate().toString();
}

function getTwoColors(
	colors: Array<string>,
	seededRandom: SeededRandom
): { foreground: string; background: string } {
	let colorList = [...colors];
	// Get random index for this array of colors
	const colorIndex = seededRandom.random_range(0, colorList.length - 1, true);
	// Set the background to the color at that array
	const background = colorList[colorIndex];
	// Remove that color from the options
	colorList.splice(colorIndex, 1);
	// Set the foreground to any other color in the array
	const foreground = seededRandom.random_array_element(colorList);

	return { foreground, background };
}

export { getTwoColors };
