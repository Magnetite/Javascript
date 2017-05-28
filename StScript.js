var out = {

w: function(a) {
document.write(a);
},

l: function(a) {
document.writeln(a);
},


id: function(a,b) {
document.getElementById(a).innerHTML = " " + b;
}


}

function re(a) {
return a;
}


function loop(a,b) {
for (var i=0;i<b;i++) {
eval(a);
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
	
		forIn(Object.values(a), callback);
		
	} else if (typeof(a) === "String"){
		
		loop(callback, a.length);
		
	} else if (typeof(a)=== "Array"){
		a.forEach(callback);
	}
}


