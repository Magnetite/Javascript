
//Implement a circularly linked list:

var List = function(){};
List.start = null;
List.end = List.start;


List.makeNode = function(){ return {val:null,next:null}; };

List.add = function(a){
    if (this.start===null){
        this.start = this.makeNode();
        this.end = this.start;
    } else {
        this.end.next = this.makeNode();
        this.end = this.end.next;
        this.end.next = this.start;
    }
    this.end.val = a;
};

List.cycle = function(a){
    
var cursor = this.start;
for (var i = 0; i < a; i++){
    
    console.log(cursor.val);
    cursor = cursor.next;
    
}
};

List.add(365);
List.add(234);
List.add(567);
List.cycle(8);