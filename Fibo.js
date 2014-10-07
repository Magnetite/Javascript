
function Fibo(a){
    var b = [0,1], fib = [];
    for (var i = 0; i < a; i++){
        b[i % 2] += b[(i+1) % 2];
        
        fib[i] = b[i % 2];
    }
    return  fib;
}

//Calculates the Ratio between successive terms in the Fibonacci Sequence, Showing it Converges to the golden ratio.
function FiboRatio(a){
    var b = [0,1], fib = [];
    for (var i = 0; i < a; i++){
        b[i % 2] += b[(i+1) % 2];
        
        fib[i] = b[i % 2] / b[(i + 1) % 2];
    }
    return  fib;
}

// Related to the above function, as the Golden Ratio is equal to: ((Sqrt(5) - 1)/2
function Sqrtof5(a){
    var b = [0,1], fib = [];
    for (var i = 0; i < a; i++){
        b[i % 2] += b[(i+1) % 2];
        
        fib[i] = ( b[i % 2] / b[(i + 1) % 2] - 0.5) * 2;
    }
    return  fib;
}


Fibo(14);