 

var intWords = ["", "one","two","three","four","five","six",'seven','eight','nine','ten','eleven',
'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

var tensWords = ['twenty','thirty','fourty','fifty'];


function arrTime(){

var d = Date();

var timeArr = d.split(" ")[4].split(":");

return timeArr;

}

function sayTime(){

    var t = arrTime();
	
	var hour = "", min = "", ampm = "";
	
	var h = parseInt(t[0]);
	var m = parseInt(t[1]);
	
    if (h > 12){
        hour = intWords[h - 12];
        ampm = "pm";
    } else {
        hour = intWords[h];
        ampm = "am";
    }
	
	
	if (m >= 20 && m < 30){
		min = tensWords[0] + " " + intWords[(m % 10) ];
	} else if (m >= 30 && m < 40){
		min = tensWords[1] + " " + intWords[(m % 10) ];
	} else if (m >= 40 && m < 50){
		min = tensWords[2] + " " + intWords[(m % 10) ];
	} else if (m >= 50){
		min = tensWords[3] + " " + intWords[(m % 10) ];
	} else if (m < 20 && m > 0){
		min = intWords[m - 1];
	} else {
		min = "O'Clock";
	}
	
	console.log(hour + " " + min + " " + ampm);
}


