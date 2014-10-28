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
