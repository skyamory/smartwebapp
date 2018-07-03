// $("button").bind("click",function(){
//     var input=$(input).attr("value");
//     alert(input);
// });

//em태그 요소에 title 정보를 가져와서 변수 title 저장
var title=$("em").attr("title");
//id가 test인 요소에 텍스트 출력
$("#test").text("attr :"+title);
//prop("프로퍼티"):해당 property의 값을 가져옴
//prop("프로퍼티",value):해당 property가 있으면 기존값을 value로 수정하고, 없으면 property 생성후 value로 초기화
//id가 p인 요소에 number라는 property를 생성하고 값(123456789)을 저장
$("#p").prop("number",123456789);
//위에서 생성한 property number를 id가 div1인 요소에 텍스트로 출력
$("#div1").text("property create :"+$("#p").prop("number"));
//id가 p인 요소의 property number를 제거
$("#p").removeProp("number");
//제거된 property를 출력하려고 하기 때문에 undifined가 출현
$("#div2").text("property remove :"+$("#p").prop("number"));

//id가 btn1인 요소(버튼)를 클릭하면 다음 함수 실행
$("#btn1").click(function(){
    //input 태그에 있는 값을 가져와서 '테스트A'를 추가하여 text에 저장
    var text="테스트A"+$("input").val();
    //text에 저장된 문자열 input 태그에 출력
    $("input").val(text);
});
//id가 btn2인 요소(버튼)를 클릭하면 다음 함수 실행
$("#btn2").click(function(){
    //input 태그의 값 비우기
    $("input").val("");
});