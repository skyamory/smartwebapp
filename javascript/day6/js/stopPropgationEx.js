function fnload(){
    var eventPhase={
        0:'none',
        1:'capture',
        2:'target',
        3:'bubble'
    };
    var depth1=document.getElementById('depth1');
    var depth2=document.getElementById('depth2');
    var depth3=document.getElementById('depth3');

    depth1.addEventListener('click',function(e){
        console.log(eventPhase[e.eventPhase]+': depth1');
    },false);
    depth2.addEventListener('click',function(e){
        console.log(eventPhase[e.eventPhase]+': depth2');
    },false);
    depth3.addEventListener('click',function(e){
        console.log(eventPhase[e.eventPhase]+': depth3');
        e.stopPropagation();
    },false);
}