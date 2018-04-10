//blank.js by Steven Williams   
//A library for blanking out offensive words on a webpage


//The only Globals in this program
var blockList = [];
var replaceList = []; //<= List of Regular Expressions

//Main program object
var b = {
    id: function(id){
        return document.getElementById(id);
    },

    scan: function(id){
        //todo: to scan selected element for words
        var ele = b.id(id);
        var elem = ele.textContent;

        for (var i = 0, len = blockList.length; i < len; i++){
            if (elem.search(blockList[i]) !== -1){
                
                b.replace(elem, i); 
            }
        }

    },

    replace: function(ele, index){
        //replace is to replace a word, with a word from replaceList

        ele.replace( blockList[index], replaceList[index] );
    },

    asterisk: function(a){
        //asterisk is to replace the middle letter with asterisks
        var out = "";
        out += a.charAt(0);
        var len = a.length;

        for (var i = 0; i < len - 1; i++){
            out += "*";
        }

        out += a.charAt(len - 1);

        return out;
    },

    delId: function(id){
        //todo: to delete posts 
        var ele = b.id(id);
        ele.parentNode.removeChild(ele);
        return;
    }
}