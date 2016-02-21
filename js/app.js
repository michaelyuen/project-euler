var arg = process.argv[2] || null;

if( arg ){
	
	var problem_number = arg.replace(/-/g, '');

	// Dynamically require the module for the problem
	var problem = require( './' + problem_number );

	// Dynamically create function name because it can't be a number
	problem_number = 'solution' + problem_number;

	console.time(problem_number);
	problem[problem_number]();
	console.timeEnd(problem_number);
}
else{
	console.log('You need to pass an argument to the problem to run: -XXX');
}