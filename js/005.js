/*
	2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

	What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */
exports.solution005 = function(){

	var factors = [11, 13, 14, 16, 17, 18, 19, 20];
	var num = 40;

	while( !isEvenlyDivisible( num, factors ) ){
		num += 20;
	}

	console.log(num);
}

function isEvenlyDivisible( num, factors ){
	for( var i=0; i < factors.length; i++){
		if( num % factors[i] !== 0 ){
			return false;
		}
	}

	return true;
}