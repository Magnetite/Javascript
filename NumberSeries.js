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



summer(31,7);
