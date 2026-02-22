import { TinyColor } from '@ctrl/tinycolor';

function getForegroundFromBackground(color: string): string {
	return new TinyColor(color).brighten(15).spin(70).desaturate().toString();
}

export { getForegroundFromBackground };
