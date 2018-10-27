var timebox=document.getElementById('timebox');
function computed(){
    var nowtime=new Date();
    targettime=new Date('2018/10/24 22:00:00');
    var spantime=targettime-nowtime;//获取的结果是两个时间之间的毫秒差
    //已经到达考试的时间，此时我们可以提示开始考试
    if(spantime<=0){
       timebox.innerHTML='开始考试';
       window.clearInterval(timer);
       return;
    }
    //还未到达考试的时间，在总毫秒差中计算出还有多少小时、分钟、秒
    var hour=Math.floor(spantime/(1000*60*60))
    spantime-=hour*60*60*1000 //把小时占据的毫秒去除掉，剩下的值中计算还有多少分钟
    var minute=Math.floor(spantime/(1000*60));
    spantime-=minute*60*1000;
    var second=Math.floor(spantime/1000);

    hour<10?hour='0'+hour:null;
    minute<10?minute='0'+minute:null;
    second<10?second='0'+second:null;

    timebox.innerHTML=hour+':' + minute +':' +second;
}
computed();

var timer=window.setInterval(computed,1000)