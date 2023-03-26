function time(){
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
		case 8:
		return "Sep"
		break;		
		case 9:
		return "Oct"
		break;
		case 10:
		return "Nov"
		break;
		case 11:
		return "Dec"
		break;
	}
}
document.getElementById("day").textContent=Day();
document.getElementById("month").textContent=Month();
document.getElementById("datt").textContent=date.getDate();
document.getElementById("year").textContent=date.getFullYear();
if(date.getHours()<10){
    document.getElementById("Hours").textContent="0"+date.getHours();
}
else{
    document.getElementById("Hours").textContent=date.getHours();
}
if(date.getMinutes()<10){
    document.getElementById("min").textContent="0"+date.getMinutes();
}
else{
    document.getElementById("min").textContent=date.getMinutes();
}
if(date.getSeconds()<10){
    document.getElementById("sec").textContent="0"+date.getSeconds();
}
else{
    document.getElementById("sec").textContent=date.getSeconds();
}

}
function Alarm(){
    const date=new Date();
    if(localStorage.length>0){
        var chou;var cmin;var alarm="off";
        var loc=localStorage;
        var arr=Object.keys(loc);
        for(var i=0;i<arr.length;i++){
        
            var time=localStorage.getItem(arr[i]);
            var alm=time[0]+time[1]+":"+time[3]+time[4];
            if(date.getHours()<10){
                chou="0"+date.getHours();
            }
            else{
                chou=date.getHours();
            }
            if(date.getMinutes()<10){
                cmin="0"+date.getMinutes();
            }
            else{
                cmin=date.getMinutes();
            }
            var cur=chou+":"+cmin;
            if(cur==alm){
               alarm="on";
            }
            
            
        }
        console.log("working");
		if(alarm=="on"){
			new Notification("Alarm");
            var con=confirm("Do You Need to cancel the alarm");

            if(con==true){
                clearInterval(int);
                console.clear();
                setInterval(()=>{window.location.reload()},60000);
            }
		}
    }


}
window.setInterval(()=>{time();Alarm();},1000);
