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


ul: function(e, a){
	var out = "<ul>";
	for (var i = 0; i < a.length; i++){
	out += "<li>" + a[i] + "</li>";
	}
doc.getElementById(e).innerHTML = out + "</ul>";
return j;
},
ol: function(e, a){
	var out = "<ol>";
	for (var i = 0; i < a.length; i++){
	out += "<li>" + a[i] + "</li>";
doc.getElementById(e).innerHTML = out + "</ol>";
return j;
	}
},
}; 
