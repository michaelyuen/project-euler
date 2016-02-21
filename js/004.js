/*
	A palindromic number reads the same both ways.
	The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

	Find the largest palindrome made from the product of two 3-digit numbers.

	--------------------------------------------------------------------------------------

	Notes:

	This solution checks the products of two 3-digit factors in blocks of 100.
	i.e. - all the possibilities of 9XX * 9XX, then 8XX, etc.

	It most certainly will not return the correct answer in all cases.

 */
exports.solution004 = function(){

	console.log(findPalindrome());
}

function findPalindrome(){

	var first_factor  = 999;
	var second_factor = first_factor;
	var limit = first_factor - 100;
	var product;

	while( first_factor > limit ){
		while( second_factor > limit ){

			product = first_factor * second_factor;

			if( isPalindrome(product) ){
				return product;
			}
			else{
				second_factor--;
			}
		}
		
		if( first_factor - limit === 1 ){
			limit -= 100;
		}

		first_factor--;
		second_factor = first_factor;
	}

	return 'Could not find palindrome.';
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