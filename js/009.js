/*
	A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

	a^2 + b^2 = c^2
	For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

	There exists exactly one Pythagorean triplet for which a + b + c = 1000.
	Find the product abc.
 */
exports.solution009 = function(){
	
	var found = false, triplet, c = 5;
	while( !found ){

		triplet = checkForTriplet( c );

		if( triplet ){
			
			console.log( triplet[0] + ', ' + triplet[1] + ', ' + triplet[2] + ': ' + (triplet[0] + triplet[1] + triplet[2] ) );

			if( triplet[0] + triplet[1] + triplet[2] === 1000 ){
				
				found = true;
				console.log( triplet[0] * triplet[1] * triplet[2] );
			}
		}

		c++;
	}
};

function checkForTriplet( c ){

	var c2 = Math.pow(c, 2), b2, a2;

	for( var b=c-1; b > 0; b-- ){

		for( var a=b-1; a > 0; a-- ){

			b2 = Math.pow( b, 2 );
			a2 = Math.pow( a, 2 );

			if( a2 + b2 === c2 ){

				return [ a, b, c ];
			}
		}
	}

	return false;
};