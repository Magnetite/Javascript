var test = function(){ 
alert("It Works!");}
var doc = document;
var j = {
in: function(e){alert(doc.getElementById(e).innerHTML);},
val: function(e){ alert(doc.getElementById(e).value);},
w: function(e){ doc.write(e);},
wl: function(e){ doc.writeln(e);},
style: function(e, s){ doc.getElementById(e).style = s;},

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
},
ul: function(e, a){
	var out = "<ul>";
	for (var i = 0; i < a.length; i++){
	out += "<li>" + a[i] + "</li>";
	}
doc.getElementById(e).innerHTML = out + "</ul>";
},
ol: function(e, a){
	var out = "<ol>";
	for (var i = 0; i < a.length; i++){
	out += "<li>" + a[i] + "</li>";
doc.getElementById(e).innerHTML = out + "</ol>";
	}
},
}; 
