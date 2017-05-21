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

function click(id, action){  
	
		if (!document.getElementById(id)){
			
			return false;
		
		}
	
		id(id, "onclick = " + action);
		
		return true;
	}
	
function classAdd(id, clss){
	id(id, "addClass = " + clss);
	return true;
}

function clear(id){
	id(id,"innerHTML = '' ");
	return true;
}

function id(id, prop){
	var doc =  document.getElementById(id);
	doc += "." + prop;
	eval(doc);
	return true;
}

function forIn(a, callback){
	if (typeof(a)=== "Object"){
		
	} else if (typeof(a) === "String"){
		
	} else if (typeof(a)=== "Array"){
		
	}
}


