/*
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
  Find the sum of all the primes below two million.
 */
exports.solution010 = () => {
  let sum = 0;

  for (let i = 0; i < 2000000; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  console.log(`[SOLUTION] ${sum}`);
};

function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}
