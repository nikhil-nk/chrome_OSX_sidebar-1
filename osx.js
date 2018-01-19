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


