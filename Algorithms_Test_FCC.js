
//Successful Algorithm!
function convertToRoman(num) {
  var romArr = ["M","CM", "D","CD", "C","XC","L","XL","X","IX","V", "IV","I"];
  var nums = [1000, 900, 500, 400, 100, 90,   50, 40, 10,   9,   5,   4,  1];
  var ans = "";
 
  
  for (var i = 0, len = nums.length; i < len; i++){
    while (num >= nums[i]){
      
     
        ans += romArr[i];
        num -= nums[i];
      
      
    }
  }
  
 return ans;
}



//Piglatin translater test for FreeCodeCamp


function translatePigLatin(str) {
  var vowels = ["a","e","i","o","u","y"];
  var ans = "";
  var tmpArr = str.split("");
  var tmp = "";
  
  for (var i = 0, len = str.length; i < len; i++){
    
    if (i === 0  && vowels.indexOf(tmpArr[0]) !== -1){
      
      ans = tmpArr.join('') + "way";
      i = len;
      
    } else if (vowels.indexOf(tmpArr[0]) === -1){
      
      tmp = tmpArr.shift();
      tmpArr.push(tmp);
      
    } else if (vowels.indexOf(tmpArr[i]) !== -1 && i !== 0) {
      
      ans = tmpArr.join('') + "ay";
      i = len;
      
    }
    
    
  }
  
  return ans;
}



//Takes a string of DNA Bases, and returns an 2 dimensional array of The Bases and their partners 
function pairElement(str) {
  var outArr = [];
  
  var arr = str.split("");
  
  for (var i = 0, len = arr.length; i < len; i++){
    switch (arr[i]){
      case "A":
        outArr.push(["A","T"]);
        break;
      case "T":
        outArr.push(["T","A"]);
        break;
      case "G": 
        outArr.push(["G","C"]);
        break;
      case "C":
        outArr.push(["C", "G"]);
        break;
    }
  }
  
  
  return outArr;
}



function addTogether() {
  
  var first = arguments[0];
  if (arguments.length === 2 && 
      typeof(first) === typeof(1) &&
      typeof(arguments[1]) === typeof(1)
     ){
    return first + arguments[1];
  } else if (arguments.length === 1 && typeof(first) === typeof(1)){
    
    return function(a){ 
      
      if (typeof(arguments[0]) === typeof(1)){
        return first + a;
      }
    
    } ;
    
  } 
  
  
  return undefined;
}


//Convert the following to HTML entities: &,<,>,",'
function convertHTML(str) {
  // &colon;&rpar;
  var out = "";
   
  out = str.replace(/&/g, "&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
  .replace(/"/g, "&quot;").replace(/'/g,"&apos;");
  
  
  return out;
}


function sumFibs(a){
    var b = 1, c = 1;
    var out = 2;
    
    for (var i = 0; b <= a || c <= a; i++){
        b += c;
        c += b;
        
        if (b % 2 === 1 && b <= a){out += b; }
        if (c % 2 === 1 && c <= a){out += c; }
    }
    
    return out;
}



function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var len1 = arr1.length;
  var len2 = arr2.length;
  
  for (var i = 0; i < len1; i++){
    
    if (arr2.indexOf(arr1[i]) === -1 &&
        newArr.indexOf(arr1[i]) === -1){
      newArr.push(arr1[i]);
    }
  
    
  }
  
  for ( i = 0; i < len2; i++){
    
    if (arr1.indexOf(arr2[i]) === -1 &&
        newArr.indexOf(arr2[i]) === -1){
      newArr.push(arr2[i]);
    }
   
    
  }
  

  
  return newArr;
}


​function whatIsInAName(collection, source){
    
    var arr = 0;
    
   var kys = Object.keys(source);
  var checkMark = 0;
   for (var i = 0, len = collection.length; i < len; i++){
     
     checkMark = 0; //Reset checkMark for new test
   
     for (var j = 0, klen = kys.length; j < klen; j++){
        if (collection[i].hasOwnProperty(kys[j]) ){
            if (collection[i][kys[j]] === source[kys[j]]){
              checkMark++;
            }
      } 
       
       if (checkMark === klen){
         arr.push(collection[i]);
         checkMark = 0;  // Reset checkMark
       }
       
      
     }
     
  }
  // Only change code above this line
  return arr;
    
}

function uniteUnique(arr) {
  
  var out = [];
  
  for (var i = 0, len = arguments.length; i <= len; i++){
    for (var j = 0, jlen = arguments[i].length; j < jlen; j++){
      
      if (j === 0){
        out.push(arguments[i][0]);
      } else {
        //TODO
      }
      
      
    }
  }
  
  return out;
}




