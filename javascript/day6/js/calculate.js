//현재 입력되고 있는 숫자 위치가 num1인지 num2인지 알려주는 변수
var numPos=1;

function setNum(num){
    var num1=document.getElementById('num1');
    var num2=document.getElementById('num2');
    var res=document.getElementById('res');
    console.log(res);
    //num1에 입력중이면
    if(numPos==1){
        if(num1.value=='0')
            num1.value=num;
        else
            num1.value=num1.value+num;
    }
    //num2에 입력중이면
    else{

    }
}