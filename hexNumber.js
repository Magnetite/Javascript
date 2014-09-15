function hex(a){
    var b = 1;
    if (a === 1){
        b = 1;
    }else {
        for (var i = 0; i < a; i++){
            b += 6 * i;
        }
        
    }
    return(b);
    
}

