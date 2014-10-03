var doc = document;

var j = {

n: function(e){ this.$n = doc.getElementById(e).innerHTML; return j;},

val: function(e){ this.$val = doc.getElementById(e).value; return j;},

w: function(e){ doc.write(e); return j;},

wl: function(e){ doc.writeln(e); return j;},

style: function(e, s){ doc.getElementById(e).style = s; return j;},


table: function(e, a, r, c){ 
var m = 0;
var out = "";
out += "<table>";
for (var i = 0;i < r; i++){
	out += "<tr>";
	for (var j = 0; j < c; j++){
	out += "<td>" + a[m] + "</td>";
	m += 1;
	}
	out += "</tr>";
}
doc.getElementById(e).innerHTML = out + "</table>";
return j;
},

list: function(e, a, z){
	var out = z;
	for (var i = 0; i < a.length; i++){
	out += "<li>" + a[i] + "</li>";
	}
doc.getElementById(e).innerHTML = out + z;
return j;
},


ul: function(e, a){
	this.list(this.e, this.a, "ul")
return j;
},

ol: function(e, a){
	this.list(this.e, this.a, "ol")
return j;
}

}; 
