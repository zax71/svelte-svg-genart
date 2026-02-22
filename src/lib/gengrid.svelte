<script lang="ts">
	import { find, Svg, SVG } from '@svgdotjs/svg.js';
	import { resize } from 'svelte-resize-observer-action';
	import { hcf } from './factors.ts';
	import { SeededRandom } from './random.ts';
	import colors from './colors.json' with { type: 'json' };
	import { getTwoColors } from './colorUtils.ts';
	import { drawCircle, drawSquare, drawPill, drawDots, drawRing } from './drawShapes.ts';

	let width: number;
	let height: number;
	let targetElement: HTMLElement;
	let genSVGInstance: GenSVG | null = null;

	class GenSVG {
		numRows: number = 0;
		numCols: number = 0;
		squareSize: number = 0;
		draw: Svg;
		seededRandom: SeededRandom;
		colorPalette: Array<string>;

		constructor(element: HTMLElement) {
			this.draw = SVG().addTo(element);
			this.seededRandom = new SeededRandom(Math.random());
			this.colorPalette = this.seededRandom.random_array_element(colors);
		}

		findGridSize(w: number, h: number, minGrid: number, maxGrid: number): number {
			// Scale up to deal with floats and make them kinda integers
			const SCALE = 100_000_000_000_000_000;
			var hcfWH = hcf(Math.round(w * SCALE), Math.round(h * SCALE));

			// If we can draw a perfect grid
			if (hcfWH / SCALE > minGrid && hcfWH / SCALE < maxGrid) {
				return hcfWH / SCALE;
			}

			// If we can draw a perfect grid on the x axis
			for (let i = 0; i < 9999; i++) {
				if (w / i > minGrid && w / i < maxGrid) {
					return w / i;
				}
			}

			// If we can draw a perfect grid on the y axis
			for (let i = 0; i < 9999; i++) {
				if (h / i > minGrid && h / i < maxGrid) {
					return h / i;
				}
			}

			// if we cannot draw a perfect grid in any axis then give up
			return minGrid;
		}

		/**
		 * Called on every redraw, basically a constructor
		 */
		drawSVG(w: number, h: number) {
			this.seededRandom.resetRandom();

			this.squareSize = this.findGridSize(w, h, 30, 80);
			this.numRows = w / this.squareSize;
			this.numCols = h / Math.ceil(this.squareSize);

			this.draw.clear();

			this.draw.size('100%', '100%').viewbox(`0 0 ${w} ${h}`);

			for (let i = 0; i < this.numRows; i++) {
				for (let j = 0; j < this.numCols; j++) {
					this.generateLittleBlock(i, j);
				}
			}
		}

		generateLittleBlock(i: number, j: number) {
			const xPos = i * this.squareSize;
			const yPos = j * this.squareSize;

			this.drawBlock(xPos, yPos);
		}

		drawBlock(x: number, y: number) {
			// Create group element
			const group = this.draw.group().addClass('draw-block');

			const { foreground, background } = getTwoColors(this.colorPalette, this.seededRandom);

			// Draw Block
			group.rect(this.squareSize, this.squareSize).fill(background).move(x, y);

			// Style Options
			const blockStyles = [drawCircle, drawSquare, drawPill, drawDots, drawRing];

			const blockStyle = this.seededRandom.random_array_element(blockStyles);

			blockStyle(this.draw, foreground, background, x, y, this.squareSize, this.seededRandom);
		}
	}

	function onResize(entry: ResizeObserverEntry) {
		width = entry.contentRect.width;
		height = entry.contentRect.height;

		if (genSVGInstance == null) {
			genSVGInstance = new GenSVG(targetElement);
		}

		genSVGInstance.drawSVG(width, height);
	}
</script>

<div use:resize={onResize} bind:this={targetElement}></div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>
