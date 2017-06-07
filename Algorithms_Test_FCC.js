
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
