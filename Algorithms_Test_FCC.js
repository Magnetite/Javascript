
function convertToRoman(num) {
  var romArr = ["M","D","C","L","X","V","I"];
  var nums = [1000, 500, 100, 50, 10, 5, 1];
  var ans = "";
  
  for (var i = 0, len = nums.length; i < len; i++){
    while (num >= nums[i]){
      ans += romArr[i];
      num -= nums[i];
    }
  }
  
 return ans;
}



