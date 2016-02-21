/*
	The prime factors of 13195 are 5, 7, 13 and 29.

	What is the largest prime factor of the number 600851475143 ?
 */
exports.solution003 = function(){

	var prime;

	for( var i=(30 - 1); i > 1; i-- ){

		if( isPrime( i ) ){
			console.log(i);
			prime = i;
		}
	}
	//console.log(prime);
}

function isPrime( i ){

	for( var x=(i - 1); x > 1; x--){
		if( i % x === 0){
			return false;
		}
	}

	return true;
}