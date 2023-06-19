let isDone: boolean = false;

let decimal: number = 6;

let color: string = "blue";
color = "red";

// 또한 템플릿 문자열 을 사용하면 여러 줄에 걸쳐 문자열을 작성할 수 있으며, 표현식을 포함시킬 수도 있습니다
let full: string = `hi my age is `
let age: number = 32;
let sentence: string = `${full}${age}`
console.log("sentence", sentence)

let list1: number[] = [1,2,3];
// generic
let list2: Array<number> = [1,2,3];
console.log("list1", list1)
console.log("list2", list2)

// tuple
let x: [string, number];
x = ["hihihi", 32];

console.log(x[0].substring(1, 2));
console.log(x[0].slice(1, -4));

// enum
enum Color {Red=2, Green, Blue}
let color1: Color = Color.Green;
console.log('color1', color1);
let colorName1: string = Color[2];
console.log('colorName1', colorName1)

// any 타입은 타입스크립트를 쓰는걸 포기하겠다는 뜻이다...
let notSure: any = 4;
notSure = "string";
console.log("notSure", notSure)

// void
function warnUser(): void {
  console.log('no return')
}
warnUser()

// never never 타입은 절대 발생할 수 없는 타입을 나타냅니다
function error(message: string): never {
  throw new Error(message);
}

function fail() { // never
  return error("fail");
}


// object
declare function create(o: object | null): void; // declare 선언후 컴파일하면 handbook.js 상에선 사라질 것이다. 하지만 이를 사용하는 경우 나타난다.
// create({prop: 0});

// type assertions - jsx와 사용할 가능성이 높으므로 as 를 사용하자
// 타입 단언은 다른 언어의 타입 변환(형 변환)과 유사하지만, 다른 특별한 검사를 하거나 데이터를 재구성하지는 않습니다. 이는 런타임에 영향을 미치지 않으며, 온전히 컴파일러만 이를 사용합니다. 타입 스크립트는 개발자가 필요한 어떤 특정 검사를 수행했다고 인지합니다.
let someValue: any = "string type";
let strLength: number = (someValue as string).length;
console.log("strLength", strLength)
