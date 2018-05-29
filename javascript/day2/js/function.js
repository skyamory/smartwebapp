console.log("add1() :"+add1(10,20));
function add1(num1, num2){
    return num1+num2;
}
var add2=function(num1, num2){
    return num1+num2;
};
console.log("add2() :"+add2(10,20));
function add3(num1, num2){
    var res=num1+num2;
    console.log("add3() :"+res);
}
add3(10,20);
console.log("add(1,2,3) :"+add1(1,2,3));
console.log("add(1) :"+add1(1));
function add4(){
    if(arguments.length==1)
        return arguments[0];
    else if(arguments.length==0)
        return 0;
    else{
        var res=0;
        for(var index in arguments){
            res+=arguments[index];
        }
        return res;
    }
}
console.log("add4() :"+add4(1,2,3,4));
var count=1;
function sayHello(){
    console.log("Hello!");
    count++;
}
setTimeout(sayHello,2000);
console.log("Callback method!");

var tmp=20;
function lexicalTest(){
    console.log("tmp :"+tmp);
    var tmp=10;
    console.log("tmp :"+tmp);
}
lexicalTest();

function outer(){
    console.log("outer()!");
    function inner(){
        console.log("outer():inner()!");
    }
    inner();
}
function inner(){
    console.log("inner()!");
}
outer();
inner();

function outer1(){
    var count=1;
    return function inner1(){
        console.log("count :"+count);
        count++;
    }
}
var closer=outer1();
closer();
closer();
closer();
function closerTest(){
    var count=1;
    function closerInner(){
        console.log("count :"+count);
        count++;
    }
    closerInner();
}
closerTest();
closerTest();
closerTest();

eval("var evalNum1=10, evalNum2=20");
console.log(add1(evalNum1, evalNum2));

var parseNum1=parseInt("123");
console.log("parseNum1=123 :"+parseNum1);
parseNum1=parseInt("12?3");
console.log("parseNum1=12?3 :"+parseNum1);
parseNum1=parseInt("!123");
console.log("parseNum1=!123 :"+parseNum1);

var parseNum2=parseFloat("123");
console.log("parseNum2=123 :"+parseNum2);
parseNum2=parseFloat("123.4");
console.log("parseNum2=123.4 :"+parseNum2);
parseNum2=parseFloat("123,4");
console.log("parseNum2=123,4 :"+parseNum2);
parseNum2=parseFloat("1e3");
console.log("parseNum2=1e3 :"+parseNum2);
parseNum2=parseFloat("123.4.5");
console.log("parseNum2=123.4.5 :"+parseNum2);

var number=Number("123");
console.log("Number(123) :"+number);
number=Number("12!3");
console.log("Number(12!3) :"+number);
number=Number("12.3");
console.log("Number(12.3) :"+number);
number=Number("1e3");
console.log("Number(1e3) :"+number);
number=Number("0xf");
console.log("Number(0xf) :"+number);
number=Number("010");
console.log("Number(010) :"+number);

var str=String(123);
console.log("String(123) :"+str);
str=String(12.3);
console.log("String(12.3) :"+str);
str=String(12,3);
console.log("String(12,3) :"+str);
str=String(true);
console.log("String(true) :"+str);

var uri=encodeURIComponent("https://www.naver.com");
console.log("encodeURIComponent(https://www.naver.com) :"+uri);
console.log("decodeURIComponent("+uri+") :"+decodeURIComponent(uri));