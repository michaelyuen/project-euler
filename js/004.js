/*
	A palindromic number reads the same both ways.
	The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

	Find the largest palindrome made from the product of two 3-digit numbers.

	--------------------------------------------------------------------------------------

	Notes:

	This solution has been updated using Project Euler's overview.
	Additionally, I refactored it to be modular and find the largest palindrome
	for the paramater n which is the number of digits in the factors.

	n = 2 = ~2ms
	n = 3 = ~5ms
	n = 4 = ~7ms
	n = 5 = ~32ms
	n = 6 = ~170ms
	n = 7 = ~1700ms
 */
exports.solution004 = function(){

	console.log( findPalindrome( 8 ) );
}

function findPalindrome( n ){
	var palindrome = 0;
	var max, min, max_divisible_by_11;
	var first_factor, second_factor, decrement;

	max = Math.pow(10, n) - 1;
	min = Math.pow(10, (n-1));

	if( max % 11 === 0 ){
		max_divisible_by_11 = max;
	}
	else{
		var i = max;
		while( i % 11 !== 0 ){
			i--;
		}
		max_divisible_by_11 = i;
		i = undefined;
	}

	first_factor = max;
	
	while( first_factor >= min ){

		if( first_factor % 11 === 0 ){
			second_factor = max;
			decrement = 1;
		}
		else{
			second_factor = max_divisible_by_11;
			decrement = 11;
		}
		while( second_factor >= first_factor ){

			var product = first_factor * second_factor;
			
			if( product <= palindrome ){
				break;
			}

			if( isPalindrome( product ) ){
				palindrome = product;
			}

			second_factor -= decrement;
		}

		first_factor--;
	}

	return palindrome ? palindrome : 'Could not find palindrome.';
}

function isPalindrome( i ){

	i = i.toString().split('');

	if( i.toString() === i.reverse().toString() ){
		return true;
	}
	else{
		return false;
	}
}