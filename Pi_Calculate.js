function slowPi(a){
    var piOut = 0, denom = 1;
    for (var i = 0; i < a; i++){
        piOut += 4/denom;
        denom += 2;
        piOut -= 4/denom;
        denom += 2;
    }
    
    return piOut;
}


//The function below uses the Nilakantha series to calculate Pi.
function Pi2(a){
    var b = 3;
    for (var i = 2; i < a * 2; i += 2){
        
        if (i % 4 == 2){
            b += (4/( i * (i + 1) * (i + 2) ) );
        } else {
            b -= (4/( i * (i + 1) * (i + 2) ) );
        }
        
    }
    
    return b;
}




function sqrtNest(a){
    if (a == 1){
        return Math.sqrt(2);
    } else if (a > 1){
        return  Math.sqrt(2 + sqrtNest(a - 1));
    }
}

function Pi1(a){
    var b = ( sqrtNest(a) ) / a;
    return Math.sqrt(2 + b);
    
}
