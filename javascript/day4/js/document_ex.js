function fontColorRed(){
    var h1=document.getElementsByClassName('hclass');
    for(var i in h1){
        h1[i].style.color='red';
}}
function fontColorBlue(){
    var h2=document.getElementsByClassName('hclass');
    for(var i in h2){
        h2[i].style.color='blue';
}}
function fontColorGreen(){
    var h3=document.getElementsByClassName('hclass');
    for(var i in h3){
        h3[i].style.color='green';
}}
function fontRed(){
    var h4=document.getElementById('hid');
        h4.style.color='red';
}
function fontBlue(){
    var h5=document.getElementById('hid');
        h5.style.color='blue';
}
function fontYellow(){
    var h6=document.getElementById('hid');
        h6.style.color='yellow';
}

// function setColorById(id,color){
//     document.getElementById(id).style.color=color;
// }
// function setColorByClassName(classname,color){
//     var allTitle=document.getElementsByClassName(className);
//     for(var i=0;i<allTitle.length;i++)
//     allTitle[i].style.color=color;
// }

// function setBtnByClassName(className){
//     var buttons=document.getElementsByClassName(className);
//     for(var i=0;i<buttons.length;i++){
//         buttons[i].style.border='none';
//         buttons[i].style.fontWeight='700';
//         buttons[i].style.color='white';
//     }
// }
// function setBtnColorByClassName(className,color){
//     var buttons=document.getElementsByClassName(className);
//     for(var i=0;i<buttons.length;i++){
//         buttons[i].style.backgroundcolor=color;
//     }
// }
// setBtnByClassName('btn');
// setBtnColorByClassName('red','red');
// setBtnColorByClassName('blue','blue');
// setBtnColorByClassName('green','green');