/**
 * Finds the highest common factor (sometimes called greatest common divisor) of two numbers
 */
function hcf(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);
    if (b > a) {
        var temp = a;
        a = b;
        b = temp;
    }
    while (true) {
        if (b == 0) return a;
        a %= b;
        if (a == 0) return b;
        b %= a;
    }
}


// https://stackoverflow.com/a/75253687/13247146
function factors(num: number): Array<number> {
    const startingFactors = []
    const latterFactors = []
    const sqrt = Math.sqrt(num)
    
    for (let i = 1; i <= sqrt; i++) {
        if (num % i == 0) {
            startingFactors.push(i)
            latterFactors.push(num / i)
        }
    }

    // edge case (if number has perfect square, then the middle factor is replicated, so remove it)
    if (sqrt % 1 == 0) startingFactors.pop()

    return startingFactors.concat(latterFactors.reverse())
}

function common_factors(num1: number, num2: number): Array<number> {
    var num1Factors = factors(num1);
    var num2Factors = factors(num2);
    var outFactors: Array<number> = [];

    num1Factors.forEach((factor) => {
        if (num2Factors.includes(factor)) {
            outFactors.push(factor)
        }
    })

    return outFactors;
}

export {hcf, factors, common_factors}