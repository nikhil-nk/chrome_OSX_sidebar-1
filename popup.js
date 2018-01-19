function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}

var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}

function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}

function compute(form) {
  if (val !== 0.0) {
   var percent = form.display.value;  
   percent = pcent.substring(percent.indexOf("%")+1);
   form.display.value = parseFloat(percent)/100 * val;
    val = 0.0;
 } else 
    form.display.value = eval(form.display.value);
  }

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}


var d=new Date();  
a=d.getDay();
switch(a){
  case(0):b="Sunday";break;
  case(1):b="Monday";break;
  case(2):b="Tuesday";break;
  case(3):b="Wednesday";break;
  case(4):b="Thursday";break;
  case(5):b="Friday";break;
  case(6):b="Saturday";break;
}
c=d.getMonth();
  switch(c){
    case(0):g="January";break;
    case(1):g="February";break;
    case(2):g="March";break;
    case(3):g="April";break;
    case(4):g="May";break;
    case(5):g="June";break;
    case(6):g="July";break;
    case(7):g="August";break;
    case(8):g="September";break;
    case(9):g="October";break;
    case(10):g="November";break;
    case(11):g="December";break;
  }

e=d.getDate();

f=g+' '+e;
document.getElementById("day").innerHTML=b;
document.getElementById("date").innerHTML=f;


