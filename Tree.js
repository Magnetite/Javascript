//Binary Tree Maker, Takes a Binary Array
function biTreeMake(arr){
    var node = {left:null, right:null};
    
    if (arr[0][0] === 1){
        node.left = {left:null, right:null};
    } else if (arr[0][0] === 0){
        node.right = {left:null, right:null};
    }
    
    arr[0].shift();
    
    
    return node.unshift( biTreeMake(arr) );
    
}




//arrTree, an array that can be used as a tree
//in a binary arrTree, a 1 represents a binary value based on it's index
//and zero represents null. 

function biArrTreeMake(mArr){
    var outArr = [
	0,0,0,0,0,
	0,0,0,0,0,
	0,0,0,0,0,
	0,0,0,0,0,
	0,0,0,0,0,
	0,0,0,0,0,
	0,0,0,0,0,
	0,0,0,0,0,
	0,0,0,0,0,
	];
    var tmp = 0;
    var lastIndex = 0;
    
    for (var i = 0, len = mArr.length; i < len; i++){
        for (var j = 0, lenJ = mArr[i].length; j < lenJ; j++){
          tmp =  mArr[i][j];
          
          if (j === 0){
              lastIndex = 1;
          }
          
          lastIndex *= 2;
          
           if (tmp === 0){
              lastIndex += 1;
              
          }
          
          outArr[lastIndex] = 1;
          
        }
    }
    
    
    return outArr;
}


