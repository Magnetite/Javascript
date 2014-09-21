

var linkedArray = [[23,4],[55,0],[97,1],[78,2],[34,3]];


 function cycleThrough(a, b){
    //var length = a.length;
    var n = 0, m = 0;
    while(n < b){
        console.log(a[m][0]);
        m = a[m][1];
        n++;
    }
} 

cycleThrough(linkedArray, 18);