/*
attribute
[name |= "value"]:value와 동일하거나 value 뒤에 -가 붙는 단어로 시작하는 속성을 가진 요소를 선택
[name *= "value"]:value를 포함하고 있는 값을 가진 요소를 선택
[name ~= "value"]:value를 단어로 포함한 값을 가진 요소를 선택
[name $= "value"]:value로 끝나는 값을 가진 요소를 선택
[name = "value"]:value와 동일한 값을 가진 요소를 선택
[name != "value"]:value와 동일하지 않은 값을 가진 요소를 선택
[name ^= "value"]:value로 시작하는 값을 가진 요소를 선택
[name = "value1"][name = "value2"]:다중 조건을 체크하여 요소를 선택
*/

//[name |= "value"] 예제
//id가 orAttr이고 자손 중에 input 태그의 이름이 inputName이거나 inputName-로 되어있는 요소들의 calue를 ortest로 설정한다.
//띄어쓰기로 다른 단어가 들어가면 해당되지 않는다.
//inputName에 -를 이용해 추가한 다른 단어 이외에는 허용 안함.
//(inputNames:x, inputName-test:o)
$("#orAttr input[name |= 'inputName']").val("ORTEST");
//[name *= "value"] 예제
//id가 mulAttr이고 자손 중에 input 태그의 이름이 inputName이 포함되는 모든 요소들의 value를 andtest로 설정한다.
//(inputNames:o, inputName-test:o, inputName test:o)
$("#mulAttr input[name *= 'inputName']").val("ANDTEST");
//[name ~= "value"] 예제
//id가 notAttr이고 자손 중에 input태그의 이름이 inputName이 단어로 포함되는 모든 요소들의 value를 ~test로 설정한다.
//((inputName:o, inputName test:o ,inputName-test:x, inputNameTest:x)
$("#notAttr input[name ~= 'inputName']").val("~TEST");
//[name != "value"] 예제
//id가 notAttr2이고 자손 중에 input태그의 이름이 inputName과 정확히 일치하지 않은 모든 요소들의 value를 !test로 설정한다.
$("#notAttr2 input[name != 'inputName']").val("!TEST");
//[name $= "value"] 예제
//id가 endAttr이고 자손 중에 input태그의 이름이 inputName으로 끝나는 모든 요소들의 value를 $test로 설정한다.
//(inputName:o, test inputName:o, testinputName:o, inputName test:x)
$("#endAttr input[name $= 'inputName']").val("$TEST");
//[name ^= "value"] 예제
//id가 beginAttr이고 자손 중에 input태그의 이름이 inputName으로 시작하는 모든 요소들의 value를 $test로 설정한다.
//(inputName:o, test inputName:x, testinputName:x, inputName test:x)
$("#beginAttr input[name ^= 'inputName']").val("^TEST");
//[name = "value1"][name = "value2"] 예제
//id가 idAttr이고 자손 중에 input태그의 id가 test를 단어로 포함하느 요소들의 value를 idtest로 설정한다.
$("#idAttr input[id = 'test']").val("idTEST");

$("body").delegate("input","focus blur",function(){
    var element=$(this);
    element.toggleClass("focused",element.is(":focus"));
});
$("button").click(function(){
    alert("제출 완료");
    $("input").val("");
});