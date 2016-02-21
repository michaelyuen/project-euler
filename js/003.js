/*
	The prime factors of 13195 are 5, 7, 13 and 29.

	What is the largest prime factor of the number 600851475143 ?

	-------------------------------------------------------------

	Notes:
	
	I began with a solution intended to solve the direct question.
	-----
	A second iteration found only unique prime factors, but I decided this was not the best approach.
	It involved an additional function, checking each i for primeness.
	-----
	Now, I have expanded my solution to generally find prime factors.
	This does not require checking for factor primeness, because it first removes all multipes of the prime.
	Thus, higher non-prime multiples of the prime are avoided.

	Finally, the largest will simply be the last.
 */
exports.solution003 = function(){

	var i = 2, prime_factors = [], num = 600851475143;

	if( num < i ){
		console.log('No prime factors.')
	}
	else if( num === i ){
		console.log('Prime factor: ' + num);
	}
	else{

		while( i < num ){

			if( num % i === 0 ){
				prime_factors.push(i);
				num /= i;
			}
			else{
				i++;
			}
		}
		prime_factors.push(num);

		console.log(prime_factors);
	}
}