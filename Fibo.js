
function Fibo(a){
    var b = [0,1], fib = [];
    for (var i = 0; i < a; i++){
        b[i % 2] += b[(i+1) % 2];
        
        fib[i] = b[i % 2];
    }
    return  fib;
}


Fibo(14);