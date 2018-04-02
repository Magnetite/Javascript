//blank.js by Steven Williams   
//A library for blanking out offensive words on a webpage


//The only Globals in this program
var blockList = [];
var replaceList = {};

//Main program object
var b = {

    scan: function(ele){
        //todo: to scan selected elements for words 
    },

    replace: function(a){
        //replace is to replace a word, with a word from replaceList

        //todo: finish this
        return replaceList[a];
    },

    asterisk: function(a){
        //asterisk is to replace the middle letter with asterisks
        var out = "";
        out += a.charAt(0);
        var len = a.length;

        for (var i = 0; i < a - 1; i++){
            out += "*";
        }

        out += a.charAt(len - 1);

        return out;
    },

    del: function(ele){
        //todo: to delete posts 
    }
}