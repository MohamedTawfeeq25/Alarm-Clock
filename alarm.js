var hours;
var mins;var alarm;
const date=new Date();


function Display(){
    document.getElementById('seta').style="display:grid";
}
function Cancel(){
    document.getElementById('seta').style="display:none";
}
function add(){
    var hour=document.getElementById('a-hours').value;
    var min=document.getElementById('a-min').value;
    if(hour!="" && min!="" && hour<24 && min<60 ){
       if(hour.length==2){
           hours=hour;
        }
        else{
            hours=0+""+hour;
        }
        if(min.length==2){
            mins=min;
         }
         else{
             mins=0+""+min;
         }
         var alm="alarm"+localStorage.length;
         localStorage.setItem(alm,hours+":"+mins);
         new Notification("Alarm Added");
         document.getElementById('a-hours').value="";
        document.getElementById('a-min').value="";
    }
    else{
        alert("Enter Valid Time");
        document.getElementById('a-hours').value="";
        document.getElementById('a-min').value="";
    }
    
}
function Alarm(){
    const date=new Date();
    if(localStorage.length>0){
        var chou;var cmin;var alarm="off";
        for(var i=1;i<=localStorage.length;i++){
            var no=i-1;
            var time=localStorage.getItem("alarm"+no);
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

var int=window.setInterval(()=>{Alarm()},1000);