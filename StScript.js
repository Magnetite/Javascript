var out = {

function w(a) {
document.write(a);
}

function l(a) {
document.writeln(a);
}

function id(a,b) {
document.getElementById(a).innerHTML = b;
}

}

function re(a) {
return a;
}


function loop(a,b) {
for (i=0;i<b;i++) {
a;
}
}

//element remover
function del(id){
	var del = document.getElementById(id);
		del.parentNode.removeChild(del);
}

function until(func, val){
	while(func !== val){}
	return true;
}

