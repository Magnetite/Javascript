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

