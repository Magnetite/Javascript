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

