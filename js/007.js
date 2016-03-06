/*
	By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

	What is the 10001st prime number?
 */
exports.solution007 = function(){

	console.log( findPrime( 10001 ) );
}

function findPrime( n ){

	var count = 0;
	var i = 2;
	var primes = [];

	while( count !== n){

		if( isPrime( i, primes ) ){
			count++;
			primes.push(i);
		}

		i++;
	}

	return primes.pop();
}

function isPrime( n, primes ){

	for( var i=0; i < primes.length; i++ ){

		if( n % primes[i] === 0 ){
			return false;
		}
	}

	return true;
}