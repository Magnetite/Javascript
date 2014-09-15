var an = ['a','b','c','d','e','f','g','h','i','j',
'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y',
'z'];



function stat(nn, out){
    var bn = [a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,
n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0];

    var letters = 0;
    var string = document.getElementById(nn).value;
    string = string.toLowerCase();
    string = string.trim();
    for (var ii in string){
        for (var jj in an){
            if (string[ii] === an[jj]){
                bn[jj] += 1;
                letters += 1;
            }
        }
    }
    for (var gg in bn){
        document.getElementById(gg).innerHTML = (an[gg] + ": " + bn[gg] + "   - " +
        (100 * (bn[gg]/string.length)).toFixed(1) + "%");
        
    } 
      document.getElementById(out).innerHTML = ("Total number of letters: " + letters);
}