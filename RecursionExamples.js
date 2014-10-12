//Recursively compute the factorial of n

function factorial(n){
    if (n == 1){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

//Recursively finds the nth centered hexagonal number

function hex(n){
    if (n == 1){
        return 1;
    } else {
        return 6 * (n - 1) + hex(n - 1);
    }
}

