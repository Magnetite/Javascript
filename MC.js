//JS Library  for making custom mathematical tables for the Art of Mental Calculation
//Uses base 10 by default

var MC = {

primes: [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,
         131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229],

loop: function(a, b){
	for (var i = 0; i < b; i++){
		//todo
		a;
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
},

numLength: function(a){
	var i = 0;
	for (; Math.pow(10,i) < a; i++){}
	return i;
},

invert: function(a){
	var len = MC.numLength(a);
	return Math.pow(10,len) - a;
},

digitSelect: function(a,b){
	var len = MC.numLength(a);
	if (len <=b){
		return -1;  //Fail
	}
	return Math.floor(a / Math.pow(10,(len - b - 1)) ) % 10;
},

comd: function(a){   //<= Will take a number like 984, double it, and return the 1st n digits, n = length of 984.
	var first = MC.digitSelect(0);
	if (first < 5){
		return -1; //Fail
	}
	var b = MC.invert(a);
	return MC.invert(b * 2);
},

reverse: function(a){
	var len = MC.numLength(a);
	var out = 0;
	
	for ( var i = 0; i < len; i++, out *= 10){
		out += MC.digitSelect(a, i);
	}
	
	return out;
},

powerEnd: function(a, pow, digits){
var out = 1;
	for (var i = 0; i < pow; i++){
		out = (out * a) % Math.pow(10, digits);
	}
	
	return out;
},

powerBegin: function(a, pow, digits){
var out = Math.pow(a, pow);
var len = MC.numLength(out);

out = Math.floor(out / Math.pow(10, len - digits) );
	
	
	return out;
},

quarterSquares: function(a){
	var numOut = [];
	var powOfTen = Math.pow(10, MC.numLength(a) );
	
	var check = MC.digitSelect(a,0);
	
	if (check > 2){
		return -1; //fail
	}
	
	numOut[0] = Math.pow(a, 2);
	numOut[1] = Math.pow( (powOfTen/2) - a, 2);
	numOut[2] = Math.pow( (powOfTen/2) + a, 2);
	numOut[0] = Math.pow( powOfTen - a, 2);
	
	return numOut;
},

avg: function(arr){
	var len = arr.length;
	var outAvg = 0;
	for (var i = 0; i < len; i++){ outAvg += arr[i]; }
	 
	 return outAvg/len;
},

midDigs: function(num, digits){
	var len = MC.numLength(num);
	
	var cut = Math.floor( (len - digits )/2  );
	
	var out = Math.floor(num/cut);
	
	return out % Math.pow(10, digits);
},

simul: function(matrix){  //<= matrix is a 2D array, with each subarray being simultaneous equations.  
	var len1 = matrix.length;
	var len2 = matrix[0].length;
	
	
	
	
},

quad: function(arr){
	var a = arr[0], b = arr[1], c = arr[2];
	var top = Math.pow( b * b - 4 * a * c, 0.5);
	
	return [(-b + top)/(2*a), (-b - top)/(2*a)];
	
}

}
