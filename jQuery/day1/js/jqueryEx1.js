//var elementCount=$("*").css("border","1px solid red").length;
// var elementCount=$(".font-red").find("*").prevObject.length;
// console.log(elementCount);
// $("#div").css("border","2px solid blue");
// $("span").css("border","2px dotted green");
// $(".font-red").css("color","violet");

/* 필터 셀렉터 filter selector
:animated=>애니메이션이 적용된 요소 선택
:focus=>현재 활성화된 요소 선택
:header=>h1,h2와 같은 헤더 요소 선택
:lang()=>특정 언어를 가진 요소 선택
:not()=>주어진 셀렉터에 해당하지 않은 모든 요소 선택
:root=>document의 루트 요소 선택(html태그)
:even=>짝수 요소 선택
:odd=>홀수 요소 선택
:first=>첫번째 요소 선택
:last=>마지;막 요소 선택
:eq(n)=>n번째 요소 선택
:lt(n)=>n번째 요소보다 작은 인덱스를 가진 모든 요소 선택
:gt(n)=>n번째 요소보다 큰 인덱스를 가진 모든 요소 선택 */

//animated 필터예제
//id가 run인 요소를 클릭하면
$("#run").click(function(){
    //div 태그 요소들 중에 애니메이션이 적용된 요소들을 선택해서 colored 클래스가 적용되어있으면 해제를 하고,
    //colored 클래스가 적용되어있지 않으면 적용한다.
    $("div:animated").toggleClass("colored");
});
function animatedIt(){
    //id가 mover인 요소에 slow 애니메이션을 적용하고, 애니메이션이 끝나면 animatedIt을 호출한다.
    $("#mover").slideToggle("slow",animatedIt);
}
animatedIt();

//focus 필터예제
//id가 contents인 요소의 모든 하위요소(*)중에서 focus blur 이벤트가 발생하면 함수 실행
$("#contents").delegate("*","focus blur",function(){
    //이벤트가 발생된 객체 정보를 element에 저장
    var element=$(this);
    //함수를 setTimeout 함수에 등록
    setTimeout(function(){
        //객체에 focused 클래스가 있으면 제거, 없으면 추가하는데, 객체가 focus된 상태이면 
        element.toggleClass("focused",element.is(":focus"));
    },0);
});

//header 필터예제
//id가 header 요소에서 header 태그(h1,h2 등)의 css를 수정한다.
$("#header :header").css({background:"#ccc",color:"blue"});

//lang() 필터예제
//언어가 en-us이면 usa 클래스를 추가해주고
$("#lang div:lang(en-us)").addClass("usa");
//언어가 en-es이면 spain 클래스를 추가
$("#lang div:lang(en-es)").addClass("spain");

//not() 필터예제
//input태그 중 checked 상태가 아닌(=checked표시가 없는) 요소가 있는 span 태그에 배경색을 노랗게 적용한다.
$("input:not(:checked)+span").css("background-color","yellow");
//$("input").attr("disabled","disabled"); //위의 focus까지 disabled되므로 삭제.

//root 필터예제
//$("root")[0].nodeName
//<b>태그에 html 문자열($(":root")[0].nodeName)을 넣고 해당 태그를 아이디가 log인 요소에 붙인다.
$("<b></b>").html($(":root")[0].nodeName).appendTo("#log");