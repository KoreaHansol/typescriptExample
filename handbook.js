var isDone = false;
var decimal = 6;
var color = "blue";
color = "red";
// 또한 템플릿 문자열 을 사용하면 여러 줄에 걸쳐 문자열을 작성할 수 있으며, 표현식을 포함시킬 수도 있습니다
var full = "hi my age is ";
var age = 32;
var sentence = "".concat(full).concat(age);
console.log("sentence", sentence);
var list1 = [1, 2, 3];
// generic
var list2 = [1, 2, 3];
console.log("list1", list1);
console.log("list2", list2);
// tuple
var x;
x = ["hihihi", 32];
console.log(x[0].substring(1, 2));
console.log(x[0].slice(1, -4));
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var color1 = Color.Green;
console.log('color1', color1);
var colorName1 = Color[2];
console.log('colorName1', colorName1);
// any 타입은 타입스크립트를 쓰는걸 포기하겠다는 뜻이다...
var notSure = 4;
notSure = "string";
console.log("notSure", notSure);
// void
function warnUser() {
    console.log('no return');
}
warnUser();
// never never 타입은 절대 발생할 수 없는 타입을 나타냅니다
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("fail");
}
// create({prop: 0});
// type assertions - jsx와 사용할 가능성이 높으므로 as 를 사용하자
// 타입 단언은 다른 언어의 타입 변환(형 변환)과 유사하지만, 다른 특별한 검사를 하거나 데이터를 재구성하지는 않습니다. 이는 런타임에 영향을 미치지 않으며, 온전히 컴파일러만 이를 사용합니다. 타입 스크립트는 개발자가 필요한 어떤 특정 검사를 수행했다고 인지합니다.
var someValue = "string type";
var strLength = someValue.length;
console.log("strLength", strLength);
// optional
function optional(a, b) {
    console.log(a, b);
}
optional(1);
// generic
function identyfy(arg) {
    return arg;
}
identyfy("3");
function identyfy2(arg) {
    console.log('arg.length', arg.length);
    return arg;
}
identyfy2([1, 2]);
