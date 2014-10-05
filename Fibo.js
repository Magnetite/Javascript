
function Fibo(a){
    var b = 0, c = 1, d = a / 2, fib = [];
    for (var i = 0; i < d; i++){
        b += c;
        c += b;
        fib[(i * 2) - 1] = b;
        fib[i * 2] = c;
    }
    return  fib;
}

Fibo(14);