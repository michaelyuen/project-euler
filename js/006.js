/*
	The sum of the squares of the first ten natural numbers is,
		1^2 + 2^2 + ... + 10^2 = 385

	The square of the sum of the first ten natural numbers is,
		(1 + 2 + ... + 10)^2 = 55^2 = 3025

	Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

	Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

	-------------------------------------------------------------

	Note: This solution could be found using a single for loop, but I opted for a more modular approach.
 */
exports.solution006 = function(){

	sumSquareDifference( 100 );
};

function sumSquareDifference( n ){

	var sum_of_squares = sumOfSquares( n );
	var square_of_sum  = squareOfSum( n );

	console.log( square_of_sum - sum_of_squares );
};

function sumOfSquares( n ){
	var sum = 0;
	for( var i=0; i <= n; i++){
		sum += Math.pow(i, 2);
	}
	return sum;
};

function squareOfSum( n ){
	var sum = 0;
	for( var i=0; i <= n; i++){
		sum += i;
	}
	return Math.pow(sum, 2);
};