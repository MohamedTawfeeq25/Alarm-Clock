const date=new Date();
function Day(){
	var day=date.getDay();
	switch(day){
		case 0:
		return "Sun"
		break;
		case 1:
		return "Mon"
		break;
		case 2:
		return "Tue"
		break;
		case 3:
		return "Wed"
		break;
		case 4:
		return "Thu"
		break;
		case 5:
		return "Fri"
		break;
		case 6:
		return "Sat"
		break;
		default:
		return "invalid"
	}
}
function Month(){
	var month=date.getMonth();
	switch(month){
		case 0:
		return "Jan"
		break;
		case 1:
		return "Feb"
		break;
		case 2:
		return "Mar"
		break;
		case 3:
		return "Apr"
		break;
		case 4:
		return "May"
		break;
		case 5:
		return "Jun"
		break;
		case 6:
		return "Jul"
		break;
		case 7:
		return "Aug"
		break;
		case 7:
		return "Sep"
		break;		
		case 7:
		return "Oct"
		break;
		case 7:
		return "Nov"
		break;
		case 7:
		return "Dec"
		break;
	}
}
function Dyear(){
	return(date.getDate()+" "+ Month()+" "+date.getFullYear()+" "+Day())
}
function Hour(){
	var Hours=date.getHours();
	if(Hours<12){
		var time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" "+"AM";
		return time;
	}
	else{
		switch(Hours){
			case 13:
			return (1);
			break;
			case 14:
			return (2);
			break;
			case 15:
			return (3);
			break;
			case 16:
			return (4);
			break;
			case 17:
			return (5);
			break;
			case 18:
			return (6);
			break;
			case 19:
			return (7);
			break;
			case 20:
			return (8);
			break;
			case 21:
			return (9);
			break;
			case 22:
			return (10);
			break;
			case 23:
			return (11);
			break;
			default:
			return (12)

		}
	}
}
console.log(Day())
console.log(Month())
console.log(Time())
console.log(Dyear())
