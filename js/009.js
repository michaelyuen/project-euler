/*
	A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

	a^2 + b^2 = c^2
	For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

	There exists exactly one Pythagorean triplet for which a + b + c = 1000.
	Find the product abc.
 */
const square = (x) => Math.pow(x, 2);
const squareRoot = (x) => Math.sqrt(x);
const areSpecial = ({ a, b, c }) => a + b + c === 1000;
const areValid = ({ a, b, c }) => a < b && b < c;
const findSpecialTriplet = () => {
  for (let a = 0; a < 1000; a++) {
    for (let b = 1; b < 1000; b++) {
      const c = squareRoot(square(a) + square(b));
      if (
        isWhole(c) &&
        isTriplet({ a, b, c }) &&
        areSpecial({ a, b, c }) &&
        areValid({ a, b, c })
      ) {
        return { a, b, c };
      }
    }
  }
};
const isTriplet = ({ a, b, c }) => square(a) + square(b) === square(c);
const isWhole = (x) => x % 1 === 0;

exports.solution009 = () => {
  const { a, b, c } = findSpecialTriplet();
  console.log(`[SPECIAL TRIPLET] a: ${a}, b: ${b}, c: ${c}`);
  console.log(`[PRODUCT] ${a * b * c}`);
};
