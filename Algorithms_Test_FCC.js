
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
  if (arguments.length === 2){
    return first + arguments[1];
  } else {
    return function(a){ return first + a;} ;
  }
  return false;
}






