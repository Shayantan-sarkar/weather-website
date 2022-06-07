const timing=document.getElementById("hours_id")
const dated=document.getElementById("date_id")
const week_day=document.getElementById("day_id")


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']



setInterval(function () {



    const time=new Date;

    const hours=time.getHours();
    const mins=time.getMinutes();
    const day=time.getDay();
    const date=time.getDate();
    const month=time.getMonth();
    const year=time.getFullYear()
    const modified_date=((date<10)?("0"+date):date)+"/"+((month<10)?("0"+month):month)+"/"+year;
    const modified_hours=(hours<10)?("0"+hours):hours;
    const modified_mins=(mins<10)?("0"+mins):mins;


    timing.innerHTML=modified_hours+":"+modified_mins;
    dated.innerHTML=modified_date;
    week_day.innerHTML=days[day];

}, 1000);