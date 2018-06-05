var h1=document.getElementById('hid');
h1.style.color='red';
h1.style.fontSize='20px';
h1.style.fontWeight='100';

function fontColorBlue(){
//class를 이용해 element 검색해서 스타일을 수정
var h2=document.getElementsByClassName('hclass');
for(var i in h2){
    h2[i].style.color='blue';
    h2[i].style.fontSize='40px';
    h2[i].style.fontWeight='100';
}}
var h3=document.querySelectorAll('.hclass');
h3[0].style.fontSize='100px';
document.write('Hello world');
document.writeln(' '); //<pre>태그 안에 작업해야 함
document.write('Hello world');