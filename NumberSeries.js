//Add up the recoproals of the powers of c.  
//Parameter "a" tells how many iteration to go through

function summer(a, c){
    var sum = [], b = 1;
    sum[0] = 0;
    for (var i = 0; i < a; i++){
        b /= c;
        sum[0] += b;
    }
    sum[1] = 1 / sum[0];
    return sum;
}


//Calculates the derivative of a unnamed term, when given the coefficient, power, and what order derivative to find.
function DeriveByPowerRule(coeff, power, deriv){
    var out = [];
    out[0] = 0;
    
    for (var i = 0; i < deriv; i++){
        
    if (deriv === 0){
        return 1;
    }
    else if (deriv < 0) {
        return false;
    }
    else {
        coeff *= power;
        power -= 1;
        
    }
      
    }
    out[0] = coeff;
    out[1] = power;
    return out;
}

// Integrates using the power rule
// A is the coefficient, b the power, and c is how many times to integrate
function integrate(a,b, c){
    out = [];
    while (c > 0){
    b += 1;
    a /=  b;
    c -= 1;
    }
    out = [a, b];
    return out;
    
}


