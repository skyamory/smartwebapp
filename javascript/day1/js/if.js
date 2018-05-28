var num=10;
console.log("num :"+num);
if(num%2==0){
    console.log("num는 짝수.");
}
else{
    console.log("num는 홀수.");
}
var id=prompt("아이디를 입력하세요");
if(id=="green"){
    var pw=prompt("비밀번호를 입력하세요");
    if(pw=="green"){
        alert("로그인에 성공했습니다")
    }
    else{
        alert("비밀번호를 잘못 입력했습니다")
    }
}
else{
    alert("아이디를 잘못 입력했습니다")
}