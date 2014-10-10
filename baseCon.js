
//Converts from base 10 integers to base n integers (2 - 9)

function baseCon(a, b){
    var tuo = [], out = [], i = 0;
    tuo[0] = 0;
    out[0] = 0;
	
	//Check for proper usage
	if (b < 2 || b > 9 || a < 1){
	return false;
	}
    
	//Converts from base 10 to base n.
	//n is: n < 10 && n > 1
    while (a > 0){
        tuo[i] = a % b;
        a /= b;
        a = Math.floor(a);
        i += 1;
        
    }
    
	//Reverses the output of last array
	//to make it read from left to right when the array is output.
    for (var j = 0, l = tuo.length; j < l; j++){
        out[j] = tuo[ (l - j) - 1];
    }
    return out;
}


function baseConvert(a, b){
    var tuo = [], out = [], i = 0;
    tuo[0] = 0;
    out[0] = 0;
    var numerals = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i",
    "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
	//Check for proper usage
	if (b < 2 || b > 36 || a < 1){
	return false;
	}
    
	//Converts from base 10 to base n.
	//n is: n < 10 && n > 1
    while (a > 0){
        tuo[i] = numerals[a % b];
        a /= b;
        a = Math.floor(a);
        i += 1;
        
    }
    
	//Reverses the output of last array
	//to make it read from left to right when the array is output.
    for (var j = 0, l = tuo.length; j < l; j++){
        out[j] = tuo[ (l - j) - 1];
    }
    return out;
}
