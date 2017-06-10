
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
    } else if (vowels.indexOf(tmpArr[i]) === -1){
      //TODO
      tmp = tmpArr.shift();
      tmpArr.push(tmp);
    } else if (i === len - 1) {
      ans += tmpArr.join('') + "ay";
    }
    
    
  }
  
  return ans;
}



