var myWindow;
function openWindow(){
    //윈도우를 하나 연다=윈도우 객체를 하나 생성한다
    myWindow=window.open("http://127.0.0.1:5500/javascript/day4/html/test.html", "MyWindow", "width=200, height=200, toolbar=yes, location=yes, menubar=yes"+",scrollbars=yes, resizable=yes, left=50, top=50");
}
function closeWindow(){
    //mywindow에 저장된 객체가 있으면 닫음
    if(myWindow)
        myWindow.close();
}
function blurWindow(){
    if(myWindow){
        myWindow.blur();
    }
}
function focusWindow(){
    if(myWindow){
        myWindow.focus();
    }
}
function checkWindow(){
    if(!myWindow){
        //한번도 열린 적 없음
        alert('한번도 열린 적 없음');
    }
    else{
        if(myWindow.closed)
            alert('닫혀있음');
        else
            alert('열려있음');
    }
}
function moveByWindow(){
    myWindow.moveBy(50,50);
}
function moveToWindow(){
    myWindow.moveTo(50,50);
}
function resizeByWindow(){
    myWindow.resizeBy(300,300);
}
function resizeToWindow(){
    myWindow.resizeTo(300,300);
}