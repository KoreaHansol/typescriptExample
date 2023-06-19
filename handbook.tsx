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