/*
    child("부모>자식"):부모+자식 관계의 요소를 선택
    descendant("ancestor descendant"):ancestor에 포함된 descendant 요소를 선택
    next adjacent("prev+next"):prev 요소의 sibling 관계이고 prev 바로 다음 위치한 요소를 선택
    next siblings("prev~siblings"):prev 요소의 sibling 관계이며 prev 다음에 나오는 모든 요소를 선택
*/

//child 계층예제
$("ul>li").css("color","red");
$("#child>ul>li").css("color","blue");

//자손 계층 예제
//$("#descendant>ul>li").css("color","green");
$("#descendant ul li").css("color","green");
//adjacent(인접) 계층 예제
//id가 adjacent이고, 자손 중에 input 태그가 나온 뒤 다음이 span 태그이면 css를 다음과 같이 적용한다.
$("#adjacent input+span").css("font-weight","700");
//형제 계층 예제
//id가 siblings이고, 자손 중에 div 태그가 나오면 같은 레벨 요소들의 css를 다음과 같이 적용한다.
$("#siblings div ~").css("color","red");