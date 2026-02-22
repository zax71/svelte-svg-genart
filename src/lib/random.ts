class SeededRandom {
	originalSeed: number;
	currentSeed: number;
	constructor(seed: number) {
		this.originalSeed = seed;
		this.currentSeed = seed;
	}

	/**
	 * Generates a pseudorandom value based off the current seed - very much so not cryptographically secure
	 * @returns A pseudorandom value
	 */
	getRandom() {
		const x = Math.sin(this.currentSeed) * 10000;

		this.currentSeed += 1;

		return x - Math.floor(x);
	}

	/**
	 * Resets the RNG state back to when the class was first instantiated
	 */
	resetRandom() {
		this.currentSeed = this.originalSeed;
	}

	/**
	 * Generates a random number within the specified range
	 * @param min The lowest possible value (inclusive)
	 * @param max The highest possible value (inclusive)
	 * @param force_int If the value should be rounded to an integer, or left as a float
	 * @returns the random number
	 */
	random_range(min: number, max: number, force_int: boolean = false): number {
		const value = this.getRandom() * (max - min) + min;

		if (force_int) {
			return Math.round(value);
		}

		return value;
	}

	/**
	 * Gets a random item from an element in an array
	 * @param targetArray The array to extract elements from
	 * @returns The extracted element
	 */
	random_array_element<T>(targetArray: Array<T>): T {
		return targetArray[this.random_range(0, targetArray.length - 1, true)];
	}
}

export { SeededRandom };
