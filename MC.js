//JS Library  for making custom mathematical tables for the Art of Mental Calculation
//Uses base 10 by default

var MC = {

primes: [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127],

loop: function(a, b){
	for (var i = 0; i < b; i++){
		//todo
	}
},

sum: function(arr){
	return arr.reduce( function(a,b){return a + b; });
},

sumPrimes: function(a){

//An value of out1 is a prime that is added to a prime of out2 at the same index as out1.
var out1 = [];  
var out2 = [];

var max_ind = 0; 
var len = primes.length;

	//find the index of array "primes" where the value is more than a, then subtract one from the index.
	for (var j = 0; j < len || primes[j] > a; j++ ){ max_ind++; }
	max_ind--;

	if (a % 2 === 0 ){
		for (var i = 0; i < len; i++){
			
		}
		
	}
},

squareEnd: function(a,b){
	return (a * a) %  Math.pow(10, b);
}


}
