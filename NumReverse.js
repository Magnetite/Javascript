//Reverses a number

function Rev(a){
    
    var n = 1, count = 0, r = 0;
    
    while(1){
        if (a < n){  count -= 1; break;}
        n *= 10;
        count += 1;
    }
    
    
    for (var i = 0; i <= count; i++){
        r += (a % 10) * Math.pow(10, (count - i) );
        a = Math.floor(a / 10);
    }
    
    return r;
}

Rev(43948288);