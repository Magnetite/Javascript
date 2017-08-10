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
	var check = b * b - 4 * a * c;
	var imagin = false;
	
	
	if (check < 0){
		imagin = true;
	}
	var top = Math.pow( Math.abs(check), 0.5);
	
	return [ [imagin, (-b + top)/(2*a)], [imagin, (-b - top)/(2*a)] ];
	
},

matrixMult: function(a, b){
	
	//Test if a and b are conformable to matrix multiplication
	if (a[0].length != b.length){
		return -1;
	}
	
	var outMatrix = [];
	
	var row = a[0].length;
	
	//todo: Fix this code
	for ( var m = 0, len = a.length; m < len; m++){
			for (var i = 0; i < row; i++){
			for ( var j = 0, jlen = b.length; j < jlen; j++){
				outMatrix[i] += a[m][i] * b[j];  //todo: fix this
			}
		}
	}
	
	return outMatrix;
	
	
},

isInt: function(a){
	if (a === Math.floor(a)){
		return true;
	}
	
	return false;
},

complexMult: function(a, b){
	var out = [];
	
	out[0] = a[0] * b[0];
	out[0] += a[1] * b[1] * -1;
	
	out[1] = a[0] * b[1];
	out[1] += a[1] * b[0];
	
	return out;
},

compInterest: function(amount, per, t){
	var percent = 1 + a/100;
	return 	amount * Math.pow(percent, t);
},

tabulate: function(start, end, callback){
	var outArr = [];
	
	for(var i = start, ind = 0; i <= end; i++, ind++){
		outArr[ind] = callback(i);  //<= todo: check syntax!
	}
}

}
